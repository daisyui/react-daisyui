import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from './'

describe('Button', () => {
  it('Should render button', () => {
    const { getByRole } = render(<Button>test</Button>)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('Should call onClick once per click event', () => {
    const mockType = jest.fn()
    const { getByRole } = render(<Button onClick={mockType}>test</Button>)
    fireEvent.click(getByRole('button'))
    expect(mockType).toHaveBeenCalledTimes(1)
  })

  it('Should not call onClick from click event if disabled', () => {
    const mockType = jest.fn()
    const { getByRole } = render(
      <Button onClick={mockType} disabled>
        test
      </Button>
    )
    fireEvent.click(getByRole('button'))
    expect(mockType).toHaveBeenCalledTimes(0)
  })
})
