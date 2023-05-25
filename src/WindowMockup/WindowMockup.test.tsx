import { render, screen } from '@testing-library/react'
import WindowMockup from './'

describe('WindowMockup', () => {
  it('Should render WindowMockup', () => {
    render(<WindowMockup />)
    const windowMockup = screen.getByLabelText('Window mockup')
    expect(windowMockup).toBeInTheDocument()
    expect(windowMockup).toHaveClass('mockup-window')
  })

  it('Should render with frameColor and backgroundColor', () => {
    render(
      <WindowMockup frameColor="primary" backgroundColor="accent">
        Content
      </WindowMockup>
    )
    const windowMockup = screen.getByLabelText('Window mockup')
    expect(windowMockup).toBeInTheDocument()
    expect(windowMockup).toHaveClass(
      'mockup-window',
      'border-primary',
      'bg-primary'
    )
  })

  it('Should render with border and borderColor', () => {
    render(
      <WindowMockup border borderColor="error">
        Content
      </WindowMockup>
    )
    const windowMockup = screen.getByLabelText('Window mockup')
    expect(windowMockup).toBeInTheDocument()
    expect(windowMockup).toHaveClass('mockup-window', 'border', 'border-error')
  })

  it('Should apply additional class names', () => {
    render(<WindowMockup className="custom-class">Content</WindowMockup>)
    const windowMockup = screen.getByLabelText('Window mockup')
    expect(windowMockup).toBeInTheDocument()
    expect(windowMockup).toHaveClass('mockup-window', 'custom-class')
  })

  it('Should render with data-theme attribute', () => {
    render(<WindowMockup dataTheme="dark">Content</WindowMockup>)
    const windowMockup = screen.getByLabelText('Window mockup')
    expect(windowMockup).toBeInTheDocument()
    expect(windowMockup).toHaveAttribute('data-theme', 'dark')
  })
})
