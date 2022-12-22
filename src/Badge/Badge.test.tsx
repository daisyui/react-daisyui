import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import Badge from './Badge'

describe('Badge', () => {
  it('renders a default state', () => {
    render(<Badge>Test</Badge>)
    expect(screen.getByLabelText('Badge')).toBeTruthy()
  })

  it('renders a variant', () => {
    render(<Badge variant="outline">Test</Badge>)
    expect(screen.getByLabelText('Badge')).toHaveClass('badge-outline')
  })

  it('renders a size', () => {
    render(<Badge size="xs">Test</Badge>)
    expect(screen.getByLabelText('Badge')).toHaveClass('badge-xs')
  })

  it('renders a color', () => {
    render(<Badge color="success">Test</Badge>)
    expect(screen.getByLabelText('Badge')).toHaveClass('badge-success')
  })

  it('renders a responsive', () => {
    render(<Badge responsive>Test</Badge>)
    expect(screen.getByLabelText('Badge')).toHaveClass(
      'badge-xs md:badge-sm lg:badge-md xl:badge-lg'
    )
  })

  it('should be able to access the native div', () => {
    const badgeRef = createRef<HTMLDivElement>()
    render(<Badge ref={badgeRef} />)
    expect(screen.getByLabelText('Badge')).toEqual(badgeRef.current)
  })
})
