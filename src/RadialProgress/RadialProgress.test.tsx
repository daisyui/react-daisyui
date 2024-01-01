import React from 'react'
import { render } from '@testing-library/react'
import RadialProgress from './'

describe('RadialProgress', () => {
  it('Should render RadialProgress', () => {
    render(<RadialProgress value={50} />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(
      <RadialProgress className="custom-class" value={50} />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(
      <RadialProgress dataTheme="light" value={50} />
    )
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should apply color class based on color prop', () => {
    const { container } = render(<RadialProgress color="primary" value={50} />)
    expect(container.firstChild).toHaveClass('text-primary')
  })

  it('Should render with the correct value', () => {
    const { container } = render(<RadialProgress value={75} />)
    expect(container.firstChild).toHaveAttribute('aria-valuenow', '75')
  })

  it('Should limit the displayed value to a range between 0 and 100', () => {
    const { container } = render(<RadialProgress value={150} />)
    expect(container.firstChild).toHaveAttribute('aria-valuenow', '100')

    const { container: container2 } = render(<RadialProgress value={-20} />)
    expect(container2.firstChild).toHaveAttribute('aria-valuenow', '0')
  })

  it('Should apply size and thickness styles correctly', () => {
    const { container } = render(
      <RadialProgress size="6rem" thickness="6px" value={50} />
    )
    const radialProgressElement = container.firstChild as HTMLDivElement
    expect(radialProgressElement).toHaveStyle('--size: 6rem')
    expect(radialProgressElement).toHaveStyle('--thickness: 6px')
  })

  it('Should render children elements', () => {
    const { container } = render(
      <RadialProgress value={50}>
        <span>Progress</span>
      </RadialProgress>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<RadialProgress ref={ref} value={50} />)
    expect(ref.current).toBeInTheDocument()
  })
})
