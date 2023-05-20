import React from 'react'
import { render, screen } from '@testing-library/react'
import Indicator from './'

describe('Indicator', () => {
  test('Should render Indicator', () => {
    render(<Indicator />)
  })

  test('Should apply additional class names', () => {
    render(<Indicator className="custom-class" />)
    const indicatorElement = screen.getByLabelText('Indicator')
    expect(indicatorElement).toHaveClass('custom-class')
  })

  test('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Indicator ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should apply the horizontal and vertical positioning classes', () => {
    render(<Indicator horizontal="start" vertical="bottom" />)
    const indicatorElement = screen.getByLabelText('Indicator')
    expect(indicatorElement).toHaveClass('indicator-start')
    expect(indicatorElement).toHaveClass('indicator-bottom')
  })

  test('Should render the provided item', () => {
    const { getByText } = render(<Indicator item="Item Content" />)
    expect(getByText('Item Content')).toBeInTheDocument()
  })

  test('Should render children elements', () => {
    const { container } = render(
      <Indicator>
        <span>Child Element</span>
      </Indicator>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })
})
