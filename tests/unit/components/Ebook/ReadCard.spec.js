import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ReadCard from '@/components/Ebook/ReadCard'

describe('ReadCard component', () => {
  let wrapper = null

  const post = {
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
  }

  const directives = {
    'lazy-load': () => {},
  }

  beforeEach(() => {
    wrapper = shallowMount(ReadCard, {
      propsData: {
        post,
      },
      stubs: ['NuxtLink'],
      directives,
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
