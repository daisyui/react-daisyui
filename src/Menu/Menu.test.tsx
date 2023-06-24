import React from 'react'
import { render } from '@testing-library/react'
import Menu from './'

describe('Menu', () => {
  it('Should render Menu', () => {
    render(<Menu />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Menu className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply horizontal modifier class', () => {
    const { container } = render(<Menu horizontal />)
    expect(container.firstChild).toHaveClass('menu-horizontal')
  })

  it('Should apply vertical modifier class', () => {
    const { container } = render(<Menu vertical />)
    expect(container.firstChild).toHaveClass('menu-vertical')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Menu dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should render with MenuTitle component', () => {
    const { getByText } = render(<Menu.Title>Title</Menu.Title>)
    expect(getByText('Title')).toBeInTheDocument()
  })

  it('Should render with MenuItem component', () => {
    const { getByText } = render(<Menu.Item>Item</Menu.Item>)
    expect(getByText('Item')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLUListElement>()
    render(<Menu ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
