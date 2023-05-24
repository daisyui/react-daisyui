import { render } from '@testing-library/react'
import Swap from './'

describe('Swap', () => {
  it('Should render Swap', () => {
    render(<Swap onElement="On" offElement="Off" />)
  })

  it('Should render onElement and offElement', () => {
    const { getByText } = render(<Swap onElement="On" offElement="Off" />)
    expect(getByText('On')).toBeInTheDocument()
    expect(getByText('Off')).toBeInTheDocument()
  })

  it('Should apply active prop', () => {
    const { container } = render(
      <Swap onElement="On" offElement="Off" active />
    )
    expect(container.firstChild).toHaveClass('swap-active')
  })

  it('Should apply rotate prop', () => {
    const { container } = render(
      <Swap onElement="On" offElement="Off" rotate />
    )
    expect(container.firstChild).toHaveClass('swap-rotate')
  })

  it('Should apply flip prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" flip />)
    expect(container.firstChild).toHaveClass('swap-flip')
  })

  it('Should apply additional class names', () => {
    const { container } = render(
      <Swap onElement="On" offElement="Off" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(
      <Swap onElement="On" offElement="Off" dataTheme="dark" />
    )
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark')
  })
})
