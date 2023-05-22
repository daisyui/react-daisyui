import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputGroup from './'

describe('InputGroup', () => {
  it('Should render InputGroup', () => {
    render(<InputGroup />)
  })

  it('Should render children elements', () => {
    const { container } = render(
      <InputGroup>
        <span>Child Element</span>
      </InputGroup>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<InputGroup className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply size classes correctly', () => {
    const { container } = render(<InputGroup size="lg" />)
    expect(container.firstChild).toHaveClass('input-group-lg')
  })

  it('Should apply vertical class when vertical prop is true', () => {
    const { container } = render(<InputGroup vertical />)
    expect(container.firstChild).toHaveClass('input-group-vertical')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLLabelElement>()
    render(<InputGroup ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should call onClick handler when clicked', () => {
    const onClick = jest.fn()
    const { container } = render(<InputGroup onClick={onClick} />)
    const labelElement = container.getElementsByClassName('input-group')[0]
    fireEvent.click(labelElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
