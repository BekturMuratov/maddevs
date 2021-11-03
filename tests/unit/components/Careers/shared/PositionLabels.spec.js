import { render } from '@testing-library/vue'
import PositionLabels from '@/components/Careers/shared/PositionLabels'

describe('PositionLabels component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionLabels, {
      props: {
        labels: {
          remote: true,
          relocation: false,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
  it('should render correctly without data', () => {
    const { container } = render(PositionLabels)
    expect(container).toMatchSnapshot()
  })
})
