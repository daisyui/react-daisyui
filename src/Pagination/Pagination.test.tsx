import { render } from '@testing-library/react'

import Pagination from './'

describe('Pagination', () => {

  it('Should render Pagination', () => {
    render(<Pagination totalCount={101} />)
  })

  it('Should apply additional root class names', () => {
    const { container } = render(<Pagination totalCount={101} classNameRoot="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
  it('Should apply additional class names', () => {
    const { container } = render(<Pagination totalCount={101} className="custom-class" />)
    expect(container.firstChild?.lastChild).toHaveClass('custom-class')
  })

  it('Should show total correctly', () => {
    const { container } = render(<Pagination totalCount={101} showTotal={(total: number) => `Total ${total} items`} />)
    expect(container.firstChild?.firstChild).toHaveTextContent("Total 101 items")
  })
  it('Should show total correctly 2', () => {
    const { container } = render(<Pagination totalCount={101} currentPage={1} showTotal={(total: number, range: number[]) => `${range[0]}-${range[1]} of ${total} items`} />)
    expect(container.firstChild?.firstChild).toHaveTextContent("1-10 of 101 items")
  })
  it('Should simple correctly', () => {
    const { container } = render(<Pagination totalCount={101} simple />)
    expect(container.firstChild?.lastChild?.childNodes).toHaveLength(2)
  })
  it('Should simple correctly 2', () => {
    const { container } = render(<Pagination totalCount={101} simple={(currentPage) => `page ${currentPage}`} />)
    expect(container.firstChild?.lastChild?.childNodes).toHaveLength(3)
  })
  it('Should apply size class correctly', () => {
    const { container } = render(<Pagination totalCount={101} size='sm' />)
    expect(container.firstChild?.lastChild?.firstChild).toHaveClass('btn-sm')
  })
  it('Should apply variant class correctly', () => {
    const { container } = render(<Pagination totalCount={101} variant='outline' />)
    expect(container.firstChild?.lastChild?.firstChild).toHaveClass('btn-outline')
  })
  it('Should apply previous label correctly', () => {
    const { container } = render(<Pagination totalCount={101} previousLabel="previous" />)
    expect(container.firstChild?.lastChild?.firstChild).toHaveTextContent("previous")
  })
  it('Should apply next label correctly', () => {
    const { container } = render(<Pagination totalCount={101} nextLabel="next" />)
    expect(container.firstChild?.lastChild?.lastChild).toHaveTextContent("next")
  })
})
