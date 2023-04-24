import React from 'react'
import { render, screen } from '@testing-library/react'

import ButtonGroup from './'
import Button from '../Button'

const buttons = [
  <Button key="1">Button 1</Button>,
  <Button key="2">Button 2</Button>,
  <Button key="3">Button 3</Button>,
]

describe('ButtonGroup', () => {
  it('Should render a group of buttons', () => {
    render(<ButtonGroup>{buttons}</ButtonGroup>)

    expect(screen.getByLabelText('Group of 3 buttons')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
    expect(screen.getByText('Button 3')).toBeInTheDocument()
  })

  it('Should apply additional class namess', () => {
    render(<ButtonGroup className="custom-class">{buttons}</ButtonGroup>)
    expect(screen.getByLabelText('Group of 3 buttons')).toHaveClass(
      'btn-group',
      'custom-class'
    )
  })

  it('Should apply vertical style when "vertical" prop is true', () => {
    render(<ButtonGroup vertical>{buttons}</ButtonGroup>)
    expect(screen.getByLabelText('Group of 3 buttons')).toHaveClass(
      'btn-group-vertical'
    )
  })

  it('Should allow passing extra propt', () => {
    render(<ButtonGroup data-testid="button-group">{buttons}</ButtonGroup>)
    expect(screen.getByTestId('button-group')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<ButtonGroup ref={ref}>{buttons}</ButtonGroup>)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should apply vertical style on small screens and horizontal on large screens', () => {
    // Set the viewport width to a small size
    window.innerWidth = 480
    window.dispatchEvent(new Event('resize'))

    const { container } = render(
      <ButtonGroup className="btn-group-vertical lg:btn-group-horizontal">
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </ButtonGroup>
    )

    // Check that the component has the vertical class for small screens
    expect(container.firstChild).toHaveClass('btn-group-vertical')

    // Set the viewport width to a large size
    window.innerWidth = 1024
    window.dispatchEvent(new Event('resize'))

    // Check that the component has the horizontal class for large screens
    expect(container.firstChild).toHaveClass('lg:btn-group-horizontal')
  })
})
