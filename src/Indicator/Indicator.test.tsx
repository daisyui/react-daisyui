import React from 'react'
import { render, screen } from '@testing-library/react'
import Indicator from './'

describe('Indicator', () => {
  test('Should render Indicator', () => {
    render(
      <Indicator>
        <Indicator.Item className="badge" />
      </Indicator>
    )
  })

  test('Should apply additional class names', () => {
    render(<Indicator data-testid="container" className="custom-class" />)
    const indicatorElement = screen.getByTestId('container')
    expect(indicatorElement).toHaveClass('custom-class')
  })

  test('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Indicator ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should apply the horizontal and vertical positioning classes', () => {
    render(<Indicator.Item horizontal="start" vertical="bottom" />)
    const indicatorElement = screen.getByLabelText('Indicator')
    expect(indicatorElement).toHaveClass('indicator-start')
    expect(indicatorElement).toHaveClass('indicator-bottom')
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
