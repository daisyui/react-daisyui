import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '../Button'
import Pagination from './'

const buttons = [
  <Button key="1">Button 1</Button>,
  <Button key="2">Button 2</Button>,
  <Button key="3">Button 3</Button>,
]

describe('Pagination', () => {
  it('Should render a group of buttons', () => {
    render(<Pagination>{buttons}</Pagination>)

    expect(screen.getByLabelText('Group of 3 buttons')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
    expect(screen.getByText('Button 3')).toBeInTheDocument()
  })

  it('Should apply additional class namess', () => {
    render(<Pagination className="custom-class">{buttons}</Pagination>)
    expect(screen.getByLabelText('Group of 3 buttons')).toHaveClass(
      'btn-group',
      'custom-class'
    )
  })

  it('Should apply vertical style when vertical prop is true', () => {
    render(<Pagination vertical>{buttons}</Pagination>)
    expect(screen.getByLabelText('Group of 3 buttons')).toHaveClass(
      'btn-group-vertical'
    )
  })

  it('Should allow passing extra props', () => {
    render(<Pagination data-testid="button-group">{buttons}</Pagination>)
    expect(screen.getByTestId('button-group')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Pagination ref={ref}>{buttons}</Pagination>)
    expect(ref.current).toBeInTheDocument()
  })
})
