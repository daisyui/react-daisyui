import { fireEvent, render, screen } from '@testing-library/react'
import Input from './'

describe('Input', () => {
  it('Should render Input', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Should have input as the only child', () => {
    render(<Input />)
    expect(screen.getAllByRole('textbox')).toHaveLength(1)
  })

  it('Should call onChange once per change event', () => {
    const mockType = jest.fn()
    render(<Input onChange={mockType} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    })
    expect(mockType).toHaveBeenCalledTimes(1)
  })

  it('Should not call onChange from change event if disabled', () => {
    const mockType = jest.fn()
    render(<Input onClick={mockType} disabled />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' },
    })
    expect(mockType).toHaveBeenCalledTimes(0)
  })

  it('Should forward the bordered prop to Input', () => {
    render(<Input bordered={false} />)
    expect(screen.getByRole('textbox')).not.toHaveClass('input-bordered')
  })

  it('Should forward the borderOffset prop to Input', () => {
    render(<Input borderOffset={false} />)
    expect(screen.getByRole('textbox')).toHaveClass('focus:outline-offset-0')
  })

  it('Should forward the size prop to Input', () => {
    render(<Input size="sm" />)
    expect(screen.getByRole('textbox')).toHaveClass('input-sm')
  })

  it('Should forward the color prop to Input', () => {
    render(<Input color="success" />)
    expect(screen.getByRole('textbox')).toHaveClass('input-success')
  })

  it('Should forward the placeholder prop to Input', () => {
    render(<Input placeholder="Write here" />)
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Write here'
    )
  })

  it('Should forward the type prop to Input', () => {
    render(<Input type="number" />)
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')
  })

  it('Should forward the className prop to Input', () => {
    render(<Input className="w-full" />)
    expect(screen.getByRole('textbox')).toHaveClass('w-full')
  })

  it('Should forward the dataTheme prop to Input', () => {
    render(<Input dataTheme="dracula" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('data-theme', 'dracula')
  })
})
