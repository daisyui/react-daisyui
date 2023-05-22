import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './'

describe('NavBar', () => {
  it('Should render NavBar', () => {
    render(<Navbar />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Navbar className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Navbar dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should render NavbarStart component', () => {
    const { getByText } = render(<Navbar.Start>Start</Navbar.Start>)
    expect(getByText('Start')).toBeInTheDocument()
  })

  it('Should render NavbarCenter component', () => {
    const { getByText } = render(<Navbar.Center>Center</Navbar.Center>)
    expect(getByText('Center')).toBeInTheDocument()
  })

  it('Should render NavbarEnd component', () => {
    const { getByText } = render(<Navbar.End>End</Navbar.End>)
    expect(getByText('End')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Navbar ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
