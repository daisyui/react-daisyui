import React from 'react'
import { render } from '@testing-library/react'
import Stack from './'

describe('Stack', () => {
  it('Should render Stack', () => {
    render(<Stack />)
  })

  it('Should render children elements', () => {
    const { container } = render(
      <Stack>
        <span>Child Element</span>
      </Stack>
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Stack ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Stack className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Stack dataTheme="dark" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark')
  })
})
