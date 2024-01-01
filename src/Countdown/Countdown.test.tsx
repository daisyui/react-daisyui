import { render, screen } from '@testing-library/react'
import Countdown from './'

describe('Countdown', () => {
  test('Should render Countdown with the correct value', () => {
    const value = 50
    render(<Countdown value={value} />)
    const countdownElement = screen.getByRole('timer')
    const innerSpan = countdownElement.querySelector('span')
    expect(countdownElement).toBeInTheDocument()

    expect(innerSpan).toHaveStyle(`--value: ${value}`)
  })

  test('Should render Countdown with a default value when value is above the range', () => {
    const value = 120
    render(<Countdown value={value} />)
    const countdownElement = screen.getByRole('timer')
    const innerSpan = countdownElement.querySelector('span')

    expect(countdownElement).toBeInTheDocument()
    expect(innerSpan).toHaveStyle(`--value: 99`)
  })

  test('Should render Countdown with a default value when value is below the range', () => {
    const value = -10
    render(<Countdown value={value} />)
    const countdownElement = screen.getByRole('timer')
    const innerSpan = countdownElement.querySelector('span')

    expect(countdownElement).toBeInTheDocument()
    expect(innerSpan).toHaveStyle(`--value: 0`)
  })

  test('Should allow passing extra props', () => {
    render(<Countdown value={10} data-testid="countdown" />)
    expect(screen.getByTestId('countdown')).toBeInTheDocument()
  })

  test('Should apply additional class names', () => {
    const { container } = render(
      <Countdown value={10} className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
