import React from 'react'
import { render } from '@testing-library/react'
import Progress from './'

describe('Progress', () => {
  it('Should render Progress', () => {
    render(<Progress />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Progress className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Progress dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should apply color class based on color prop', () => {
    const { container } = render(<Progress color="primary" />)
    expect(container.firstChild).toHaveClass('progress-primary')
  })

  it('Should render progress bar with correct attributes', () => {
    const { container } = render(<Progress value={50} max={100} />)
    const progressElement = container.firstChild as HTMLProgressElement
    expect(progressElement.tagName).toBe('PROGRESS')
    expect(progressElement.value).toBe(50)
    expect(progressElement.max).toBe(100)
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLProgressElement>()
    render(<Progress ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
