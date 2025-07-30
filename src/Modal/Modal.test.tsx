import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useCallback, useRef } from 'react'
import Button from '../Button'
import Modal from './'
import './dialog.mock'

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

  describe('dialog ref handlers', () => {
    const TestDialogWithHandlers = () => {
      const ref = useRef<HTMLDialogElement>(null)
      const handleShow = useCallback(() => {
        ref.current?.showModal()
      }, [ref])
      const handleClose = useCallback(() => {
        ref.current?.close()
      }, [ref])
      return (
        <div className="font-sans">
          <Button onClick={handleShow}>Open Modal</Button>
          <Modal ref={ref}>
            <Modal.Header className="font-bold">Hello!</Modal.Header>
            <Modal.Body>
              Press ESC key or click the button below to close
            </Modal.Body>
            <Modal.Actions>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Actions>
          </Modal>
        </div>
      )
    }

    it('should show modal with button', async () => {
      const user = userEvent.setup()
      render(<TestDialogWithHandlers />)

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

      const openButton = screen.getByRole('button', { name: 'Open Modal' })
      expect(openButton).toBeInTheDocument()

      await user.click(openButton)

      const dialog = await screen.findByRole('dialog')
      expect(dialog).toBeInTheDocument()

      const closeButton = screen.getByRole('button', { name: 'Close' })
      expect(closeButton).toBeInTheDocument()
      await user.click(closeButton)

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })

    it('should handle cancel event when triggered manually', async () => {
      const user = userEvent.setup()
      render(<TestDialogWithHandlers />)

      const openButton = screen.getByRole('button', { name: 'Open Modal' })
      await user.click(openButton)

      const dialog = await screen.findByRole<HTMLDialogElement>('dialog')
      expect(dialog).toBeInTheDocument()

      // Manually trigger the cancel event (simulating ESC key)
      await dialog.triggerCancel()

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })
})
