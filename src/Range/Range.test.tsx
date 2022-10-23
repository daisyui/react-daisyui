import { render, screen } from '@testing-library/react'
import Range from './Range'

describe('Range', () => {
  it('should not render with invalid step', () => {
    render(<Range data-testid="range" step="homer" />)
    expect(screen.queryByText('|')).not.toBeInTheDocument()
  })

  it('should render Range', () => {
    render(<Range data-testid="range" step={2} />)
    expect(screen.getByTestId('range')).toBeInTheDocument()
  })

  it('should render Range with 40 step', () => {
    render(<Range data-testid="range" step={40} />)
    expect(screen.getAllByText('|')).toHaveLength(4)
  })

  it('should render Range with 0 step', () => {
    render(<Range data-testid="range" step={0} />)
    expect(screen.getAllByText('|')).toHaveLength(101)
  })

  it('should render step with decimal ', () => {
    render(<Range data-testid="range" step="3.14159265" />)
    expect(screen.getAllByText('|')).toHaveLength(33)
  })

  it('should not render with invalid step', () => {
    render(<Range data-testid="range" step={undefined} />)
    expect(screen.queryByText('|')).not.toBeInTheDocument()
  })

  it('should not render with invalid step', () => {
    render(<Range data-testid="range" step="homer" />)
    expect(screen.queryByText('|')).not.toBeInTheDocument()
  })

  it('should render step with negative number ', () => {
    render(<Range data-testid="range" step="-25" />)
    expect(screen.getAllByText('|')).toHaveLength(101)
  })
})
