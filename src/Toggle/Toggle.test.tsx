import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toggle from './Toggle'
import Form from '../Form'

const ToggleTest = () => {
  const [toggleState, setToggleState] = useState(false)

  const toggle = () => setToggleState((o) => !o)
  return (
    <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Power">
        <Toggle checked={toggleState} onChange={toggle} className="m-2" />
      </Form.Label>
    </Form>
  )
}

describe('Toggle', () => {
  it('should render', () => {
    render(<Toggle data-testid="toggler" />)
    expect(screen.getByTestId('toggler')).toBeInTheDocument()
  })

  it('should render disabled', () => {
    render(<Toggle disabled data-testid="toggler" />)
    expect(screen.getByTestId('toggler')).toBeDisabled()
  })

  it('should render checked', () => {
    render(<Toggle defaultChecked data-testid="toggler" />)
    expect(screen.getByTestId('toggler')).toBeChecked()
  })

  it('should render unchecked', () => {
    render(<Toggle data-testid="toggler" />)
    expect(screen.getByTestId('toggler')).not.toBeChecked()
  })

  it('should render disabled and checked', () => {
    render(<Toggle defaultChecked disabled data-testid="toggler" />)
    expect(screen.getByTestId('toggler')).toBeDisabled()
    expect(screen.getByTestId('toggler')).toBeChecked()
  })

  it('should render with label', () => {
    render(
      <Form className="bg-base-200 p-4 rounded-lg shadow">
        <Form.Label title="Cheat mode">
          <Toggle className="m-2" />
        </Form.Label>
      </Form>
    )
    expect(screen.getByLabelText(/cheat mode/i)).toBeInTheDocument()
  })

  it('should render checked after user click', async () => {
    const user = userEvent.setup()
    render(<ToggleTest />)

    expect(screen.getByLabelText(/power/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/power/i)).not.toBeChecked()
    await user.click(screen.getByLabelText(/power/i))
    expect(screen.getByLabelText(/power/i)).toBeChecked()
  })
})
