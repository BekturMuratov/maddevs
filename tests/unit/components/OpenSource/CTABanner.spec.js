import { render } from '@testing-library/vue'
import CTABanner from '@/components/OpenSource/CTABanner'

const stubs = ['TitleDesc', 'UIBanner', 'UIButton']

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('CTABanner component', () => {
  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
