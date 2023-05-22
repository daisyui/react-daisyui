import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Link from './'

describe('Link', () => {
  it('Should render Link', () => {
    render(<Link />)
  })

  it('Should render children elements', () => {
    const { container } = render(
      <Link>
        <span>Child Element</span>
      </Link>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Link className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply color class correctly', () => {
    const { container } = render(<Link color="primary" />)
    expect(container.firstChild).toHaveClass('link-primary')
  })

  it('Should apply hover class when hover prop is true', () => {
    const { container } = render(<Link hover />)
    expect(container.firstChild).toHaveClass('link-hover')
  })

  it('Should not apply hover class when hover prop is false', () => {
    const { container } = render(<Link hover={false} />)
    expect(container.firstChild).not.toHaveClass('link-hover')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Link dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLAnchorElement>()
    render(<Link ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should call onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { container } = render(<Link onClick={onClick}>Click me</Link>)
    const anchorElement = container.getElementsByClassName('link')[0]
    fireEvent.click(anchorElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
