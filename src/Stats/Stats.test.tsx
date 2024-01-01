import React from 'react'
import { render } from '@testing-library/react'
import Stats from './'

describe('Stats', () => {
  it('Should render Stats', () => {
    render(<Stats />)
  })

  it('Should render children elements', () => {
    const { getByText } = render(
      <Stats>
        <Stats.Stat>Test 1</Stats.Stat>
        <Stats.Stat>Test 2</Stats.Stat>
      </Stats>
    )

    expect(getByText('Test 1')).toBeInTheDocument()
    expect(getByText('Test 2')).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Stats className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Stats ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Stats dataTheme="dark" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark')
  })

  it('Should apply horizontal modifier class', () => {
    const { container } = render(<Stats horizontal />)
    expect(container.firstChild).toHaveClass('stats-horizontal')
  })

  it('Should apply vertical modifier class', () => {
    const { container } = render(<Stats vertical />)
    expect(container.firstChild).toHaveClass('stats-vertical')
  })
})
