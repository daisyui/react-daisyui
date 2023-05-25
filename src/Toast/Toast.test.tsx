import { render, screen } from '@testing-library/react'
import Toast from './'

describe('Toast', () => {
  it('Should render children elements', () => {
    render(
      <Toast>
        <div>Child component</div>
      </Toast>
    )

    const childComponent = screen.getByText('Child component')
    expect(childComponent).toBeInTheDocument()
  })

  it('Should render with default horizontal and vertical options', () => {
    render(<Toast data-testid="toast-div" />)

    const renderedDiv = screen.getByTestId('toast-div')
    expect(renderedDiv).toHaveClass('toast-end')
    expect(renderedDiv).toHaveClass('toast-bottom')
  })

  it('Should render with custom horizontal and vertical options', () => {
    render(<Toast horizontal="start" vertical="top" data-testid="toast-div" />)

    const renderedDiv = screen.getByTestId('toast-div')
    expect(renderedDiv).toHaveClass('toast-start')
    expect(renderedDiv).toHaveClass('toast-top')
  })

  it('Should apply additional class names', () => {
    render(<Toast className="custom-toast" data-testid="toast-div" />)

    const renderedDiv = screen.getByTestId('toast-div')
    expect(renderedDiv).toHaveClass('custom-toast')
  })
})
