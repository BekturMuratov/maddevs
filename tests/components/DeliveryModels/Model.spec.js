import { render } from '@testing-library/vue'
import Model from '@/components/DeliveryModels/Model'

const stubs = ['ModelBanner', 'ModelOptimal', 'ModelProcess', 'CTABanner']

describe('Model component', () => {
  it('should render correctly', () => {
    const { container } = render(Model, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
