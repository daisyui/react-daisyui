import React from 'react'
import { render, screen } from '@testing-library/react'
import Dropdown from './'

const DropdownItems = [
  <Dropdown.Item key="1">Item 1</Dropdown.Item>,
  <Dropdown.Item key="2">Item 2</Dropdown.Item>,
  <Dropdown.Item key="3">Item 3</Dropdown.Item>,
]
describe('Dropdown', () => {
  test('Should render Dropdown', () => {
    render(
      <Dropdown>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
        <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    )

    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByText('Toggle')).toBeInTheDocument()
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getAllByRole('menuitem')).toHaveLength(3)
  })

  test('Should apply additional class names', () => {
    render(
      <Dropdown
        className="custom-dropdown"
        item={<Dropdown.Item>Custom Item</Dropdown.Item>}
      >
        <Dropdown.Toggle className="custom-toggle">Toggle</Dropdown.Toggle>
        <Dropdown.Menu className="custom-menu">{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    )

    expect(screen.getByRole('listbox')).toHaveClass('custom-dropdown')
    expect(screen.getByText('Toggle').parentElement).toHaveClass(
      'custom-toggle'
    )
    expect(screen.getByRole('menu')).toHaveClass('custom-menu')
  })

  it('Should allow passing extra props', () => {
    render(<Dropdown data-testid="dropdown" />)
    expect(screen.getByTestId('dropdown')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Dropdown ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should apply horizontal and vertical positioning classes', () => {
    render(
      <Dropdown horizontal="left" vertical="top">
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
        <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    )

    expect(screen.getByRole('listbox')).toHaveClass('dropdown-left')
    expect(screen.getByRole('listbox')).toHaveClass('dropdown-top')
  })

  test('Should apply end, hover, and open classes', () => {
    render(
      <Dropdown end hover open>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
        <Dropdown.Menu>{DropdownItems}</Dropdown.Menu>
      </Dropdown>
    )

    expect(screen.getByRole('listbox')).toHaveClass('dropdown-end')
    expect(screen.getByRole('listbox')).toHaveClass('dropdown-hover')
    expect(screen.getByRole('listbox')).toHaveClass('dropdown-open')
  })
})
