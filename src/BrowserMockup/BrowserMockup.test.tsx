import React from 'react'
import { render } from '@testing-library/react'
import BrowserMockup from './'

const url = 'https://react.daisyui.com'
describe('BrowserMockup', () => {
  it('Should render BrowserMockup', () => {
    render(<BrowserMockup url={url} />)
  })

  it('Should apply url ', () => {
    const { container } = render(<BrowserMockup url={url} />)
    expect(
      container.querySelector('.mockup-browser-toolbar')?.firstChild
    ).toHaveTextContent(url)
  })

  it('Should apply additional class names', () => {
    const { container } = render(
      <BrowserMockup url={url} className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should apply additional input class names', () => {
    const { container } = render(
      <BrowserMockup url={url} inputClassName="input-class" />
    )
    expect(
      container.querySelector('.mockup-browser-toolbar')?.firstChild
    ).toHaveClass('input-class')
  })

  it('Should forward the ref to the element', () => {
    const ref = React.createRef<HTMLDivElement>()
    const inputRef = React.createRef<HTMLDivElement>()
    const innerRef = React.createRef<HTMLDivElement>()
    render(
      <BrowserMockup
        url={url}
        ref={ref}
        inputRef={inputRef}
        innerRef={innerRef}
      />
    )
    expect(ref.current).toBeInTheDocument()
    expect(inputRef.current).toBeInTheDocument()
    expect(innerRef.current).toBeInTheDocument()
  })
})
