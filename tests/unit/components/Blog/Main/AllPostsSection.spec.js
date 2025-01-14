import { render, screen, fireEvent } from '@testing-library/vue'
import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'
import allPosts from '../../../__mocks__/allPosts'
import * as homeContent from '../../../__mocks__/homePageContent'

const localVue = createLocalVue()
localVue.use(Vuex)

const recipeMock = jest.fn()
const scroll = jest.fn()
const windowsScroll = jest.fn()
recipeMock.mockReturnValue('homePageContent')

const mocks = {
  $prismic: {
    asText: () => 'text',
    asHtml: html => `<p>${html}</p>`,
  },
}

const stubs = ['NuxtLink', 'PostCard']

const store = {
  getters: {
    filteredPosts: () => allPosts,
    allPosts: () => allPosts,
    postsCategory: jest.fn(),
    postsPage: () => 2,
    homePageContent: () => homeContent.default,
    allAuthors: jest.fn(),
  },
  actions: {
    changePostsCategory: jest.fn(),
    getMorePosts: jest.fn(),
  },
}

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')
containerToRender.scrollIntoView = scroll

const link = document.createElement('a')
link.setAttribute('href', 'undefined')
link.setAttribute('data-testid', 'test-href')
containerToRender.append(link)

describe('AllPostsSection component', () => {
  window.scrollTo = windowsScroll
  it('is a Vue instance', () => {
    const { container } = render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct render posts', () => {
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    expect(screen.getAllByTestId('test-single-post')).toHaveLength(allPosts.length)
  })

  it('categories() computed method should return correct array', async () => {
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        ...store,
        getters: {
          ...store.getters,
          homePageContent: {
            categories: [
              {
                title: 'Editors Pick',
                tags: [],
              },
              {
                title: 'DevOps',
                tags: [],
              },
            ],
          },
        },
      },
    })

    const expectedCategories = [
      {
        title: 'Editors Pick',
        tags: [],
      },
      {
        title: 'DevOps',
        tags: [],
      },
    ]
    expect(wrapper.vm.categories).toEqual(expectedCategories)
  })

  it('categories() computed method with invalid homePageContent getter should return empty array', async () => {
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store: {
        ...store,
        getters: {
          ...store.getters,
          homePageContent: 'string',
        },
      },
    })

    expect(wrapper.vm.categories).toEqual([])
  })

  it('should correct work change post category', async () => {
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const input = screen.getAllByTestId('test-post-input')
    await fireEvent.update(input[0], 'Hardware')
    expect(store.actions.changePostsCategory).toHaveBeenCalledTimes(1)
  })

  it('correctly call update class function from watcher if haven\'t parent node or not found attribute', () => {
    mocks.visitedPost = 'Hardware'
    const singleLink = document.createElement('a')
    singleLink.setAttribute('href', mocks.visitedPost)
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      container: document.body.appendChild(singleLink),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(0)
    expect(windowsScroll).toHaveBeenCalledTimes(0)
  })

  it('correctly call update class function from watcher', () => {
    mocks.visitedPost = 'Hardware'
    const wrapper = shallowMount(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.watch.filteredPosts()
    expect(scroll).toHaveBeenCalledTimes(1)
    expect(windowsScroll).toHaveBeenCalledTimes(1)
  })

  it('should correct work get more posts handler', () => {
    const nextTick = jest.fn()
    mocks.$nextTick = nextTick
    store.getters.filteredPosts = () => [...allPosts, ...allPosts]
    render(AllPostsSection, {
      localVue,
      mocks,
      stubs,
      store,
    })

    const button = screen.getByTestId('test-load-more-button')
    fireEvent.click(button)

    expect(store.actions.getMorePosts).toHaveBeenCalledTimes(1)
  })
})
