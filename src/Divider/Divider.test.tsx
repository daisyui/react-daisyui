import { render, screen } from '@testing-library/react'
import Divider from './'

describe('Divider', () => {
  test('Should render Divider', () => {
    render(<Divider />)
    const dividerElement = screen.getByRole('separator')

    expect(dividerElement).toBeInTheDocument()
    expect(dividerElement).toHaveClass('divider')
  })

  test('Should render vertical Divider', () => {
    render(<Divider vertical />)
    const dividerElement = screen.getByRole('separator')

    expect(dividerElement).toBeInTheDocument()
    expect(dividerElement).toHaveClass('divider', 'divider-vertical')
  })

  test('Should render horizontal Divider', () => {
    render(<Divider horizontal />)
    const dividerElement = screen.getByRole('separator')

    expect(dividerElement).toBeInTheDocument()
    expect(dividerElement).toHaveClass('divider', 'divider-horizontal')
  })

  test('Should apply additional class names', () => {
    render(<Divider className="custom-class" />)
    const dividerElement = screen.getByRole('separator')

    expect(dividerElement).toBeInTheDocument()
    expect(dividerElement).toHaveClass('divider', 'custom-class')
  })

  test('Should allow passing extra props', () => {
    render(<Divider data-testid="divider" />)
    expect(screen.getByTestId('divider')).toBeInTheDocument()
  })
})
