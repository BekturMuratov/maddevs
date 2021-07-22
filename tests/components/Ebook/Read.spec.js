import 'regenerator-runtime'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Read from '@/components/Ebook/Read'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const postsList = [
  {
    data: {
      title: [
        {
          text: '2. title',
        },
      ],
      featured_image: {
        url: 'https://example.com/image2.jpg',
        alt: 'alt text',
      },
    },
  },
  {
    data: {
      title: [
        {
          text: '1. title',
        },
      ],
      featured_image: {
        url: 'https://example.com/image.jpg',
        alt: 'alt text',
      },
    },
  },
]

const actions = {
  getCustomerUniversityPosts: jest.fn(),
}

const getters = {
  CUPosts: () => postsList,
}

describe('Read component', () => {
  let wrapper = null

  beforeEach(() => {
    const store = new Vuex.Store({ actions, getters })
    wrapper = shallowMount(Read, {
      store,
      localVue,
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            show: jest.fn(),
          },
        },
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('sortedCUPosts should return sorted list with CUPosts', () => {
    const { sortedPosts } = wrapper.vm
    const sorted = postsList.sort(sortedPosts)
    expect(sorted).toHaveLength(2)
    expect(sorted[0].data.title[0].text).toEqual('1. title')
    expect(sorted[1].data.title[0].text).toEqual('2. title')
  })

  it('should posts should return empty array when no CUPosts', () => {
    const store = new Vuex.Store({
      actions,
      getters: {
        CUPosts: () => [],
      },
    })
    const localWrapper = shallowMount(Read, {
      store,
      localVue,
    })
    const { posts } = localWrapper.vm
    expect(posts).toHaveLength(0)
  })

  it('if call handleSendedForm that variable successMessage should with text', () => {
    const { successMessage } = wrapper.vm
    expect(successMessage).toBeNull()
    const payload = {
      email: 'test@test.test',
    }
    const result = 'The letter with the PDF file was successfully sent to mail test@test.test. <br><br> Please check your email.'
    wrapper.vm.handleSendedForm(payload)
    expect(wrapper.vm.successMessage).toEqual(result)
  })
})
