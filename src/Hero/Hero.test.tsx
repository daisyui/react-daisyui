import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './'

describe('Hero', () => {
  test('Should render Hero', () => {
    render(<Hero />)
  })

  test('Should apply additional class names', () => {
    const { container } = render(<Hero className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('Should allow passing extra props', () => {
    render(<Hero data-testid="Hero" />)
    expect(screen.getByTestId('Hero')).toBeInTheDocument()
  })

  test('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Hero ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should render children elements', () => {
    const { container } = render(
      <Hero>
        <Hero.Content>
          <h1>Hero Title</h1>
        </Hero.Content>
        <Hero.Overlay />
      </Hero>
    )
    expect(container.querySelector('h1')).toHaveTextContent('Hero Title')
    expect(container.querySelector('.hero-overlay')).toBeInTheDocument()
  })

  test('Should apply additional class names to Hero Content and Hero Overlay components', () => {
    const { container } = render(
      <Hero>
        <Hero.Content className="custom-content">
          <h1>Hero Title</h1>
        </Hero.Content>
        <Hero.Overlay className="custom-overlay" />
      </Hero>
    )
    const contentElement = container.querySelector('.custom-content')
    const overlayElement = container.querySelector('.custom-overlay')

    expect(contentElement).toBeInTheDocument()
    expect(overlayElement).toBeInTheDocument()
  })
})
