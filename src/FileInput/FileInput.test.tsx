import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FileInput from './'

describe('FileInput', () => {
  test('Should render FileInput', () => {
    render(<FileInput />)
  })

  test('Should apply the specified size class', () => {
    const { container } = render(<FileInput size="lg" />)
    expect(container.firstChild).toHaveClass('file-input-lg')
  })

  test('Should apply the specified color class', () => {
    const { container } = render(<FileInput color="primary" />)
    expect(container.firstChild).toHaveClass('file-input-primary')
  })

  test('Should apply the bordered class', () => {
    const { container } = render(<FileInput bordered />)
    expect(container.firstChild).toHaveClass('file-input-bordered')
  })

  test('Should apply additional class names', () => {
    const { container } = render(<FileInput className="custom-class" />)
    const FileInputElement = container.querySelector('input[type="file"]')

    expect(FileInputElement).toBeInTheDocument()
    expect(FileInputElement).toHaveClass('file-input', 'custom-class')
  })

  test('Should allow passing extra props', () => {
    render(<FileInput data-testid="FileInput" />)
    expect(screen.getByTestId('FileInput')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<FileInput ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should call onChange when a file is selected', () => {
    const onChangeMock = jest.fn()
    const { container } = render(<FileInput onChange={onChangeMock} />)
    const input = container.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    fireEvent.change(input, {
      target: { files: [new File(['test'], 'test.png')] },
    })
    expect(onChangeMock).toHaveBeenCalled()
  })
})
