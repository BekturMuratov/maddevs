import { render } from '@testing-library/vue'
import PositionTags from '@/components/Careers/shared/PositionTags'

describe('PositionTags component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionTags, {
      props: {
        tags: ['DevOps', 'Job'],
      },
    })

    expect(container).toMatchSnapshot()
  })
  it('should render correctly without data', () => {
    const { container } = render(PositionTags)

    expect(container).toMatchSnapshot()
  })
})
