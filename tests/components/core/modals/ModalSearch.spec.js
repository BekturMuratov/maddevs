import 'regenerator-runtime/runtime'
import { render } from '@testing-library/vue'
import ModalSearch from '@/components/core/modals/ModalSearch'

describe('ModalSearch component', () => {
  const mocks = {
    $refs: {
      searchInput: {
        focus: () => null,
      },
    },
    $prismic: {
      api: {
        tags: ['iOS'],
      },
    },
  }

  const store = {
    actions: {
      setSearchResponse: () => '',
    },
    getters: {
      allAuthors() {
        return [
          {
            id: '123',
            position: 'Senior',
          },
        ]
      },
      blogTags() {
        return []
      },
    },
  }

  it('test', () => {
    const { container } = render(ModalSearch, {
      store,
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
  //
  // beforeEach(() => {
  //   wrapper = mount(ModalSearch, {
  //     data: () => ({
  //       response: {
  //         results: [],
  //       },
  //     }),
  //     mocks,
  //   })
  // })
  //
  // it('should render correctly', () => {
  //   expect(wrapper).toMatchSnapshot()
  // })

  // it('if set data with date Thu May 20 2021 16:52:46 GMT+0600 to formattedDate will return May 20, 2021', () => {
  //   const post = {
  //     data: {
  //       date: 'Thu May 20 2021 16:52:46 GMT+0600',
  //     },
  //   }
  //   expect(wrapper.vm.formattedDate(post)).toBe('May 20, 2021')
  // })
  //
  // describe('searchPosts', () => {
  //   it('if response === null > searchPosts will return []', () => {
  //     wrapper = shallowMount(ModalSearch, {
  //       data: () => ({
  //         response: {},
  //       }),
  //       mocks,
  //     })
  //     expect(wrapper.vm.searchPosts).toEqual([])
  //   })
  //
  //   it('if response has not key "results" searchPosts will return []', () => {
  //     wrapper = shallowMount(ModalSearch, {
  //       data: () => ({
  //         response: {},
  //       }),
  //       mocks,
  //     })
  //     expect(wrapper.vm.searchPosts).toEqual([])
  //   })
  //
  //   it('if key "results" is empty > searchPosts will return []', () => {
  //     wrapper = shallowMount(ModalSearch, {
  //       data: () => ({
  //         response: {
  //           results: [],
  //         },
  //       }),
  //       mocks,
  //     })
  //     expect(wrapper.vm.searchPosts).toEqual([])
  //   })
  //
  //   it('if key "results" has data > searchPosts will return data', () => {
  //     wrapper = shallowMount(ModalSearch, {
  //       data: () => ({
  //         response: {
  //           results: [
  //             {
  //               data: {
  //                 date: 'Thu May 20 2021 16:52:46 GMT+0600',
  //                 featured_image: {
  //                   url: 'http://localhost',
  //                 },
  //                 title: [
  //                   {
  //                     text: '',
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       }),
  //       mocks,
  //       stubs: ['NuxtLink'],
  //     })
  //     expect(wrapper.vm.searchPosts).toHaveLength(1)
  //   })
  //
  //   it('test sorting for searchPosts', () => {
  //     wrapper = shallowMount(ModalSearch, {
  //       data: () => ({
  //         response: {
  //           results: [
  //             {
  //               data: {
  //                 id: 1,
  //                 date: 'Thu May 19 2020 11:22:01 GMT+0600',
  //                 featured_image: {
  //                   url: 'http://localhost',
  //                 },
  //                 title: [
  //                   {
  //                     text: '',
  //                   },
  //                 ],
  //               },
  //             },
  //             {
  //               data: {
  //                 id: 2,
  //                 date: 'Thu May 20 2021 16:52:46 GMT+0600',
  //                 featured_image: {
  //                   url: 'http://localhost',
  //                 },
  //                 title: [
  //                   {
  //                     text: '',
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       }),
  //       mocks,
  //       stubs: ['NuxtLink'],
  //     })
  //     expect(wrapper.vm.searchPosts[0].data.id).toBe(2)
  //     expect(wrapper.vm.searchPosts[1].data.id).toBe(1)
  //   })
  // })
  //
  // it('if set to args Frontend Development > tagLink will return /blog/tag/frontend-development/', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     mocks,
  //   })
  //   expect(wrapper.vm.tagLink('Frontend Development')).toEqual('/blog/tag/frontend-development/')
  // })
  //
  // it('if set to 2 arg position > getAuthor will return Senior', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     localVue,
  //     store,
  //     mocks: {
  //       ...mocks,
  //     },
  //   })
  //   const post = {
  //     data: {
  //       post_author: {
  //         id: '123',
  //       },
  //     },
  //   }
  //   expect(wrapper.vm.getAuthor(post, 'position')).toEqual('Senior')
  // })
  //
  // it('if post arg is empty > getAuthor will return null', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     localVue,
  //     store,
  //     mocks: {
  //       ...mocks,
  //     },
  //   })
  //   const post = undefined
  //   expect(wrapper.vm.getAuthor(post, 'position')).toBeNull()
  // })
  //
  // it('if field arg is empty > getAuthor will return null', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     localVue,
  //     store,
  //     mocks: {
  //       ...mocks,
  //     },
  //   })
  //   const post = {
  //     data: {
  //       post_author: {
  //         id: '123',
  //       },
  //     },
  //   }
  //   expect(wrapper.vm.getAuthor(post)).toBeNull()
  // })
  //
  // it('if post obj dosnt have key "id" > getAuthor will return null', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     localVue,
  //     store,
  //     mocks: {
  //       ...mocks,
  //     },
  //   })
  //   const post = {
  //     data: {
  //       post_author: {},
  //     },
  //   }
  //   expect(wrapper.vm.getAuthor(post)).toBeNull()
  // })
  //
  // it('if call onClose method > data response will be null', () => {
  //   wrapper = shallowMount(ModalSearch, {
  //     localVue,
  //     store,
  //     mocks: {
  //       ...mocks,
  //     },
  //     data: () => ({
  //       response: [{}, {}],
  //     }),
  //   })
  //   expect(wrapper.vm.response).toEqual([{}, {}])
  //   wrapper.vm.onClose()
  //   expect(wrapper.vm.response).toBeNull()
  // })
})
