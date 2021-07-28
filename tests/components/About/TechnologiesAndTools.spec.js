import { render, fireEvent, screen } from '@testing-library/vue'
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools'

const directives = {
  'lazy-load': () => {},
}

describe('TechnologiesAndTools', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologiesAndTools, {
      directives,
    })

    expect(screen.getByText('Ansible')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly detect click handler', async () => {
    const { html } = render(TechnologiesAndTools, {
      directives,
    })

    const btn = screen.getAllByTestId('test-tech_legend__item')
    await fireEvent.click(btn[0])
    expect(html()).toContain('<div class="tech_legend tech_legend-devops">')
    await fireEvent.click(btn[0])
    expect(html()).not.toContain('<div class="tech_legend tech_legend-devops">')
  })
})
