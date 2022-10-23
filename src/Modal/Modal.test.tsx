import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './'
import Button from '../Button'

const TestModal = ({ state }: { state: boolean }) => {
  const [open, setOpen] = React.useState(state)

  const toggleModal = () => setOpen((o) => !o)
  return (
    <>
      <Button onClick={toggleModal}>Open Sesame</Button>
      <Modal open={open}>
        <Modal.Header className="font-bold">
          These are not the droids you're looking for
        </Modal.Header>
        <Button onClick={toggleModal}>Do not click me</Button>
      </Modal>
    </>
  )
}

describe('Modal', () => {
  it('should not show modal', () => {
    render(
      <Modal>
        {' '}
        <Modal.Header className="font-bold">
          These are not the droids you're looking for
        </Modal.Header>
        <Button>Do not click me</Button>
      </Modal>
    )
    expect(
      screen.queryByRole('button', { name: 'Do not click me' })
    ).not.toBeInTheDocument()
  })

  it('should show modal', () => {
    render(
      <Modal open>
        {' '}
        <Modal.Header className="font-bold">
          These are not the droids you're looking for
        </Modal.Header>
        <Button>Do not click me</Button>
      </Modal>
    )
    expect(
      screen.getByRole('button', { name: 'Do not click me' })
    ).toBeInTheDocument()
  })

  it('should open modal with button', async () => {
    const user = userEvent.setup()
    render(<TestModal state={false} />)
    expect(
      screen.getByRole('button', { name: 'Open Sesame' })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('button', { name: 'Do not click me' })
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open Sesame' }))

    expect(
      screen.getByRole('button', { name: 'Do not click me' })
    ).toBeInTheDocument()
  })

  it('should close modal with button', async () => {
    const user = userEvent.setup()
    render(<TestModal state={true} />)

    expect(
      screen.getByRole('button', { name: 'Do not click me' })
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Do not click me' }))

    expect(
      screen.queryByRole('button', { name: 'Do not click me' })
    ).not.toBeInTheDocument()
  })
})
