import { render, screen } from '@testing-library/vue'
import CardProjectInNumbers from '@/components/Cases/yourcast/CardProjectInNumbers'

describe('CardProjectInNumbers component', () => {
  it('should render correctly', () => {
    const { container } = render(CardProjectInNumbers)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectInNumbers)
    expect(screen.getByText(/viewers per day/i).className).toBeTruthy()
  })
})
