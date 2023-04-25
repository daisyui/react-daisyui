import { render, screen } from '@testing-library/react'
import Rating, { RatingProps } from './Rating'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

const TestComponent = (props: RatingProps) => {
  return (
    <Rating {...props}>
      <Rating.Item name="rating-1" />
      <Rating.Item name="rating-1" />
      <Rating.Item name="rating-1" />
      <Rating.Item name="rating-1" />
      <Rating.Item name="rating-1" />
    </Rating>
  )
}

const ControlledTestComponent = (props?: Partial<RatingProps>) => {
  const [value, setValue] = useState(0)

  return (
    <TestComponent value={value} onChange={(i) => setValue(i)} {...props} />
  )
}

describe('Rating', () => {
  it('Should render', () => {
    render(<TestComponent value={0} />)
    expect(screen.getByLabelText('Rating')).toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(6)
    expect(screen.getAllByRole('checkbox')[0]).toHaveClass('hidden')
  })

  it.each([
    [0, 0],
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
  ])('Should change on value prop change', (value, checkboxIndex) => {
    render(<TestComponent value={value} />)
    expect(screen.getAllByRole('checkbox')[checkboxIndex]).toBeChecked()

    if (value === 0) {
      expect(screen.getAllByRole('checkbox')[checkboxIndex]).toHaveClass(
        'hidden'
      )
    }
  })

  it.each([
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
  ])('Should change on click', async (toBeClickedIndex, toBeCheckedIndex) => {
    render(<ControlledTestComponent />)
    await userEvent.click(screen.getAllByRole('checkbox')[toBeClickedIndex])
    expect(screen.getAllByRole('checkbox')[toBeCheckedIndex]).toBeChecked()
  })

  it('Should not change on click if onChange prop is not provided', async () => {
    render(<TestComponent value={4} />)
    await userEvent.click(screen.getAllByRole('checkbox')[4])
    expect(screen.getAllByRole('checkbox')[3]).toBeChecked()
    expect(screen.getAllByRole('checkbox')[4]).not.toBeChecked()
  })
})
