import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '../Button'
import Pagination from './'

const testid = 'pagination'
const buttons = [
  <Button key="1">Button 1</Button>,
  <Button key="2">Button 2</Button>,
  <Button key="3">Button 3</Button>,
]

describe('Pagination', () => {
  it('Should render a group of buttons', () => {
    render(<Pagination>{buttons}</Pagination>)

    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
    expect(screen.getByText('Button 3')).toBeInTheDocument()
  })

  it('Should apply additional class namess', () => {
    render(
      <Pagination className="custom-class" data-testid={testid}>
        {buttons}
      </Pagination>
    )
    expect(screen.getByTestId(testid)).toHaveClass('join', 'custom-class')
  })

  it('Should apply vertical style when vertical prop is true', () => {
    render(
      <Pagination vertical data-testid={testid}>
        {buttons}
      </Pagination>
    )
    expect(screen.getByTestId(testid)).toHaveClass('join-vertical')
  })

  it('Should allow passing extra props', () => {
    render(<Pagination data-testid={testid}>{buttons}</Pagination>)
    expect(screen.getByTestId(testid)).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Pagination ref={ref}>{buttons}</Pagination>)
    expect(ref.current).toBeInTheDocument()
  })
})
