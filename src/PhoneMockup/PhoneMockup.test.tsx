import React from 'react'
import { render } from '@testing-library/react'
import PhoneMockup from './'

describe('PhoneMockup', () => {
  it('Should render PhoneMockup', () => {
    render(<PhoneMockup />)
  })

  it('Should apply additional class names', () => {
    const { container } = render(<PhoneMockup className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<PhoneMockup dataTheme="light" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'light')
  })

  it('Should render children elements', () => {
    const { getByText } = render(
      <PhoneMockup>
        <p>Phone content</p>
      </PhoneMockup>
    )
    expect(getByText('Phone content')).toBeInTheDocument()
  })

  it('Should apply border color based on color prop', () => {
    const { container } = render(<PhoneMockup color="primary" />)
    expect(container.firstChild).toHaveClass('border-primary')
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<PhoneMockup ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
