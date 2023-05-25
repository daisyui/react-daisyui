import { render, screen } from '@testing-library/react'
import Theme from './'

describe('Theme', () => {
  it('Should render children elements', () => {
    render(
      <Theme>
        <div>Child component</div>
      </Theme>
    )

    const childComponent = screen.getByText('Child component')
    expect(childComponent).toBeInTheDocument()
  })

  it('Should render with default theme if no dataTheme prop is provided', () => {
    render(<Theme data-testid="theme-div" />)

    const renderedDiv = screen.getByTestId('theme-div')
    expect(renderedDiv).toHaveAttribute('data-theme', 'light')
  })

  it('Should use closest ancestor theme if no dataTheme prop is provided', () => {
    render(
      <div data-theme="ancestor-theme" data-testid="ancestor-div">
        <Theme />
      </div>
    )

    const renderedDiv = screen.getByTestId('ancestor-div')
    expect(renderedDiv).toHaveAttribute('data-theme', 'ancestor-theme')
  })

  it('Should pass down data-theme prop to the rendered div', () => {
    render(<Theme dataTheme="dark" data-testid="theme-div" />)

    const renderedDiv = screen.getByTestId('theme-div')
    expect(renderedDiv).toHaveAttribute('data-theme', 'dark')
  })

  it('Should update theme when dataTheme prop changes', () => {
    render(<Theme dataTheme="light" data-testid="theme-div-1" />)

    let renderedDiv = screen.getByTestId('theme-div-1')
    expect(renderedDiv).toHaveAttribute('data-theme', 'light')

    render(<Theme dataTheme="dark" data-testid="theme-div-2" />)

    renderedDiv = screen.getByTestId('theme-div-2')
    expect(renderedDiv).toHaveAttribute('data-theme', 'dark')
  })
})
