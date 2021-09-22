import { render, screen } from '@testing-library/vue'
import InfrastructureSchema from '@/components/Cases/nambafood/InfrastructureSchema.vue'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('InfrastructureSchema component', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureSchema, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(InfrastructureSchema, {
      mocks,
    })

    expect(screen.getByText(/Website and mobile app infrastructure scheme/i).className).toBeTruthy()
  })
})
