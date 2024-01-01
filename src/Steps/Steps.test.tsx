import { render } from '@testing-library/react'
import Steps from './'

describe('Steps component', () => {
  it('Should render Steps', () => {
    render(<Steps />)
  })

  it('Should render children elements', () => {
    const { getByText } = render(
      <Steps>
        <Steps.Step>Step 1</Steps.Step>
        <Steps.Step>Step 2</Steps.Step>
      </Steps>
    )

    expect(getByText('Step 1')).toBeInTheDocument()
    expect(getByText('Step 2')).toBeInTheDocument()
  })

  it('Should apply additional class names', () => {
    const { container } = render(<Steps className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Steps dataTheme="dark" />)
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark')
  })

  it('Should apply vertical modifier class', () => {
    const { container } = render(<Steps vertical />)
    expect(container.firstChild).toHaveClass('steps-vertical')
  })

  it('Should apply horizontal modifier class', () => {
    const { container } = render(<Steps horizontal />)
    expect(container.firstChild).toHaveClass('steps-horizontal')
  })
})
