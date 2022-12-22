import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import Avatar from './Avatar'

describe('Artboard', () => {
  it('renders a default state', () => {
    render(<Avatar />)
    expect(screen.getByLabelText('Avatar photo')).toBeTruthy()
  })

  it('renders an image', () => {
    render(<Avatar src="i.png" />)
    expect(screen.getByRole('img')).toBeTruthy()
  })

  it('renders letters', () => {
    render(<Avatar letters="test" />)
    expect(screen.getByText(/test/i)).toBeTruthy()
  })

  it('renders a size', () => {
    const { container } = render(<Avatar size="xs" />)
    const content = container.querySelectorAll('div')[1]
    expect(content).toHaveClass('w-10 h-10')
  })

  it('renders a shape', () => {
    const { container } = render(<Avatar shape="circle" />)
    const content = container.querySelectorAll('div')[1]
    expect(content).toHaveClass('rounded-full')
  })

  it('renders a color', () => {
    const { container } = render(<Avatar letters="test" color="success" />)
    const content = container.querySelectorAll('div')[1]
    expect(content).toHaveClass('bg-success text-success-content')
  })

  it('renders a border', () => {
    const { container } = render(<Avatar border />)
    const content = container.querySelectorAll('div')[1]
    expect(content).toHaveClass('ring ring-offset-base-100 ring-offset-2')
  })

  it('renders an online', () => {
    render(<Avatar online />)
    expect(screen.getByLabelText('Avatar photo')).toHaveClass('online')
  })

  it('renders an offline', () => {
    render(<Avatar offline />)
    expect(screen.getByLabelText('Avatar photo')).toHaveClass('offline')
  })

  it('should be able to access the native div', () => {
    const avatarRef = createRef<HTMLDivElement>()
    render(<Avatar ref={avatarRef} />)
    expect(screen.getByLabelText('Avatar photo')).toEqual(avatarRef.current)
  })
})
