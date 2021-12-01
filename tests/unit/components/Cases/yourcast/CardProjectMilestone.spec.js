import { fireEvent, render, screen } from '@testing-library/vue'
import CardProjectMilestone from '@/components/Cases/yourcast/CardProjectMilestone'

const props = {
  title: '2016',
  description: 'description',
  background: 'background',
}

describe('CardProjectMilestone component', () => {
  it('should render correctly', async () => {
    const { container } = render(CardProjectMilestone, {
      props,
      mocks: {
        play: jest.fn(),
      },
    })

    const element = await screen.getByTestId('test-card-project-milestone')
    await fireEvent.mouseOver(element)
    await fireEvent.mouseOut(element)

    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectMilestone, {
      props,
    })
    expect(screen.getByText(props.title).tagName).toBe('H4')
  })
})
