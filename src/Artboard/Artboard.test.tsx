import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import Artboard from './Artboard'

describe('Artboard', () => {
  it('renders a default state', () => {
    render(<Artboard>Test</Artboard>)
    expect(screen.getByLabelText('Artboard')).toBeTruthy()
  })

  it('renders a size', () => {
    render(<Artboard size={1}>Test</Artboard>)
    expect(screen.getByLabelText('Artboard')).toHaveClass('phone-1')
  })

  it('renders a direction', () => {
    render(<Artboard horizontal>Test</Artboard>)
    expect(screen.getByLabelText('Artboard')).toHaveClass('horizontal')
  })

  it.each`
    demo         | expected
    ${undefined} | ${true}
    ${true}      | ${true}
    ${false}     | ${false}
  `('renders a demo', ({ demo, expected }) => {
    render(<Artboard demo={demo}>Test</Artboard>)
    if (expected) {
      expect(screen.getByLabelText('Artboard')).toHaveClass('artboard-demo')
    } else {
      expect(screen.getByLabelText('Artboard')).not.toHaveClass('artboard-demo')
    }
  })

  it('should be able to access the native div', () => {
    const artboardRef = createRef<HTMLDivElement>()
    render(<Artboard ref={artboardRef}>Test</Artboard>)
    expect(screen.getByLabelText('Artboard')).toEqual(artboardRef.current)
  })
})
