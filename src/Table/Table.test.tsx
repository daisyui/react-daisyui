import { render } from '@testing-library/react'
import React from 'react'
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

  it.each`
    size    | expected
    ${'xs'} | ${'table-xs'}
    ${'sm'} | ${'table-sm'}
    ${'md'} | ${'table-md'}
    ${'lg'} | ${'table-lg'}
  `('Should apply $size size prop', ({ size, expected }) => {
    const { container } = render(<Table size={size} />)
    expect(container.firstChild).toHaveClass(expected)
  })

  it('Should apply zebra prop', () => {
    const { container } = render(<Table zebra />)
    expect(container.firstChild).toHaveClass('table-zebra')
  })

  it('Should apply pinCols prop', () => {
    const { container } = render(<Table pinCols />)
    expect(container.firstChild).toHaveClass('table-pin-cols')
  })

  it('Should apply pinRows prop', () => {
    const { container } = render(<Table pinRows />)
    expect(container.firstChild).toHaveClass('table-pin-rows')
  })

  const tableComponents: [string, React.ElementType][] = [
    ['Table.Head', Table.Head],
    ['Table.Row', Table.Row],
    ['Table.Footer', Table.Footer],
  ]
  describe.each(tableComponents)('asd', (componentName, TableComponent) => {
    it(`${componentName}: Should render th for the first child and td tags for subsequent children when noCell is false`, () => {
      const { container } = render(
        <TableComponent>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </TableComponent>
      )
      expect(container.querySelectorAll('th').length).toEqual(1)
      expect(container.querySelectorAll('td').length).toEqual(2)
    })

    it(`${componentName}: Should render th for the first child and td tags for subsequent children when noCell is false`, () => {
      const { container } = render(
        <TableComponent>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </TableComponent>
      )
      expect(container.querySelectorAll('th').length).toEqual(1)
      expect(container.querySelectorAll('td').length).toEqual(2)
    })
  })
})
