import React from 'react'
import { render } from '@testing-library/react'
import Mask from './'

describe('Mask', () => {
  it('Should render Mask', () => {
    render(<Mask />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Mask className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply variant class correctly', () => {
    const { container } = render(<Mask variant="circle" />)
    expect(container.firstChild).toHaveClass('mask-circle')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Mask dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should render with src prop', () => {
    const { container } = render(<Mask src="image.png" />)
    expect(container.firstChild).toHaveAttribute('src', 'image.png')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLImageElement>()
    render(<Mask ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
