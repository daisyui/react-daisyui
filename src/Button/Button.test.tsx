import { fireEvent, render, screen } from '@testing-library/react'
import Button from './'

describe('Button', () => {
  it('Should render button', () => {
    render(<Button>test</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Should call onClick once per click event', () => {
    const mockType = jest.fn()
    render(<Button onClick={mockType}>test</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(mockType).toHaveBeenCalledTimes(1)
  })

  it('Should not call onClick from click event if disabled', () => {
    const mockType = jest.fn()
    render(
      <Button onClick={mockType} disabled>
        test
      </Button>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(mockType).toHaveBeenCalledTimes(0)
  })

  it('Renders an anchor tag when an href exists', () => {
    render(
      <Button tag="a" href="/home">
        Home
      </Button>
    )

    expect(screen.getByRole('link')).toBeTruthy()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home')
  })
})
