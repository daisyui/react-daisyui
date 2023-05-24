import React from 'react'
import { render } from '@testing-library/react'
import Table from './'

describe('Table', () => {
  it('Should render Table', () => {
    render(<Table />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Table className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLTableElement>()
    render(<Table ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Table dataTheme="dark" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark')
  })

  it('Should apply compact prop', () => {
    const { container } = render(<Table compact />)
    expect(container.firstChild).toHaveClass('table-compact')
  })

  it('Should apply zebra prop', () => {
    const { container } = render(<Table zebra />)
    expect(container.firstChild).toHaveClass('table-zebra')
  })
})
