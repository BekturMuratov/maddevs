import CollectingDataForAnalysis from '@/components/Cases/itc/CollectingDataForAnalysis'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const stubs = ['TextQuote', 'Picture']

describe('CollectingDataForAnalysis component', () => {
  it('should render correctly', () => {
    const { container } = render(CollectingDataForAnalysis, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
