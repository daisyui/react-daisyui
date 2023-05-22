import React from 'react'
import { render } from '@testing-library/react'
import Kbd from './'

describe('Kbd', () => {
  it('Should render Kbd', () => {
    render(<Kbd />)
  })

  it('Should render children elements', () => {
    const { container } = render(
      <Kbd>
        <span>Child Element</span>
      </Kbd>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLElement>()
    render(<Kbd ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Kbd className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply size classes correctly', () => {
    const { container } = render(<Kbd size="lg" />)
    expect(container.firstChild).toHaveClass('kbd-lg')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Kbd dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })
})
