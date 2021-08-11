import { render, screen } from '@testing-library/vue'
import CardResult from '@/components/Cases/veeqo/CardResult'

const directives = {
  'lazy-load': () => {},
}

describe('CardResult component', () => {
  const props = {
    icon: 'gears-card',
    title: '~250-300 ms',
    description: 'Search time went down to under 5 seconds (now: ~250-300 ms)',
  }

  it('should render correctly', () => {
    const { container } = render(CardResult, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
      directives,
    })

    expect(screen.getByText(props.title)).not.toBeNull()
    expect(screen.getByText(props.description)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
