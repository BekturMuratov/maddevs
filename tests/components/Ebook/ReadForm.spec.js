import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ReadForm from '@/components/Ebook/ReadForm'

describe('ReadForm component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ReadForm, {
      stubs: {
        Learn: {
          render(h) { return h('div') },
        },
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should generate $emit event when submit button is clicked', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })
})
