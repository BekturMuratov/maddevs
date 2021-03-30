import { mount } from '@vue/test-utils'
import CardNinjaSushi from '@/components/Cases/cards-content/CardNinjaSushi'

describe('cardNinjaSushi', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(CardNinjaSushi, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
