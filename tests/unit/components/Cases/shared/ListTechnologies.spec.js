import { render } from '@testing-library/vue'
import ListTechnologies from '@/components/Cases/shared/ListTechnologies'

const slots = {
  default: '<li>List item</li>',
}
describe('ListTechnologies component', () => {
  it('should render correctly', () => {
    const { container } = render(ListTechnologies, {
      slots,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with slots', () => {
    const { html } = render(ListTechnologies, {
      slots,
    })

    expect(html()).toContain(slots.default)
  })
})
