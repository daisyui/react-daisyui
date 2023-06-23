import { render, screen, within } from '@testing-library/react'
import { createRef } from 'react'
import Alert from './Alert'

describe('Alert', () => {
  it('renders a default state', () => {
    render(<Alert>Test</Alert>)
    expect(screen.getByRole('alert')).toBeTruthy()
  })

  it('renders an icon', () => {
    render(<Alert icon={<div data-testid="foo" />}>Test</Alert>)
    expect(screen.getByTestId('foo')).toBeTruthy()
  })

  it('renders a status', () => {
    render(<Alert status="success">Test</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('alert-success')
  })

  it('should be able to access the native div', () => {
    const alertRef = createRef<HTMLDivElement>()
    render(<Alert ref={alertRef} />)
    expect(screen.getByRole('alert')).toEqual(alertRef.current)
  })
})
