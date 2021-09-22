import { render, screen } from '@testing-library/vue'
import Card from '@/components/Cases/shared/Card.vue'

const props = {
  padding: '16px',
}

describe('Card component', () => {
  it('should render correctly', () => {
    const { container } = render(Card, {
      props,
      slots: {
        default: 'Main Content',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render styles', () => {
    render(Card, {
      props,
      slots: {
        default: 'Main Content',
      },
    })

    expect(screen.getByText('Main Content').style.padding).toBe(props.padding)
  })
})
