import { render, screen } from '@testing-library/react'
import Tooltip from './'

describe('Tooltip', () => {
  it('Should render with message and children', () => {
    render(
      <Tooltip message="Tooltip message">
        <button>Hover me</button>
      </Tooltip>
    )

    const tooltipButton = screen.getByText('Hover me')
    expect(tooltipButton).toBeInTheDocument()

    const tooltipDiv = screen.getByRole('tooltip')
    expect(tooltipDiv).toHaveAttribute('data-tip', 'Tooltip message')
  })

  it('Should render with default styles and position', () => {
    render(<Tooltip message="Tooltip message" />)

    const tooltipDiv = screen.getByRole('tooltip')
    expect(tooltipDiv).toHaveClass('tooltip')
    expect(tooltipDiv).not.toHaveClass('tooltip-open')
    expect(tooltipDiv).not.toHaveClass('tooltip-primary')
    expect(tooltipDiv).not.toHaveClass('tooltip-top')
  })

  it('Should render with custom styles and position', () => {
    render(
      <Tooltip message="Tooltip message" open color="primary" position="top" />
    )

    const tooltipDiv = screen.getByRole('tooltip')
    expect(tooltipDiv).toHaveClass('tooltip-open')
    expect(tooltipDiv).toHaveClass('tooltip-primary')
    expect(tooltipDiv).toHaveClass('tooltip-top')
  })

  it('Should apply additional class names', () => {
    render(<Tooltip message="Tooltip message" className="custom-class" />)

    const tooltipDiv = screen.getByRole('tooltip')
    expect(tooltipDiv).toHaveClass('custom-class')
  })
})
