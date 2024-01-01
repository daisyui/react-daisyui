import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import Checkbox from './index'
import userEvent from '@testing-library/user-event'
import { ComponentColor, ComponentSize } from '../types'

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={({ target: { checked } }) => setChecked(checked)}
    />
  )
}

describe('Checkbox', () => {
  it('Should render', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('Should not be checked by default', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('Should get checked on click', async () => {
    render(<Checkbox />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('Should get checked on click - controlled component', async () => {
    render(<ControlledCheckbox />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('Should not get checked on click if disabled', async () => {
    render(<Checkbox disabled />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('Should be checked if checked prop is true', () => {
    render(<Checkbox checked readOnly />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('Should be checked if defaultChecked prop is true', () => {
    render(<Checkbox defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('Should get focused on tab key press', async () => {
    render(<Checkbox />)
    await userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })

  it('(focused) Should get checked on space key press', async () => {
    render(<Checkbox />)
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('Should be indeterminate if indeterminate prop is true', () => {
    render(<Checkbox indeterminate />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox).toBeInstanceOf(HTMLInputElement)
    expect(checkbox.indeterminate).toBe(true)
  })

  it.each(['xs', 'sm', 'md', 'lg'] satisfies ComponentSize[])(
    'Should render correct size based on size prop',
    (size) => {
      render(<Checkbox size={size} />)
      expect(screen.getByRole('checkbox')).toHaveClass(`checkbox-${size}`)
    }
  )

  it.each([
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
  ] satisfies ComponentColor[])(
    'Should render correct color based on color prop',
    (color) => {
      render(<Checkbox color={color} />)
      expect(screen.getByRole('checkbox')).toHaveClass(`checkbox-${color}`)
    }
  )

  it('Should render class based on className prop', () => {
    const testClass = '123asd123asd'
    render(<Checkbox className={testClass} />)
    expect(screen.getByRole('checkbox')).toHaveClass(testClass)
  })
})
