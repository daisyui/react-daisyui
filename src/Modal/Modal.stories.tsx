import React, { useRef, useCallback } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '.'
import Button from '../Button'

export default {
  title: 'Actions/Modal',
  component: Modal,
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const ref = useRef<HTMLDialogElement>(null)
  const handleShow = useCallback(() => {
    ref.current?.showModal()
  }, [ref])
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export const ClickedOutside: Story<ModalProps> = (args) => {
  const ref = useRef<HTMLDialogElement>(null)
  const handleShow = useCallback(() => {
    ref.current?.showModal()
  }, [ref])
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
    </div>
  )
}
ClickedOutside.args = {
  backdrop: true,
}

export const CloseButton: Story<ModalProps> = (args) => {
  const ref = useRef<HTMLDialogElement>(null)
  const handleShow = useCallback(() => {
    ref.current?.showModal()
  }, [ref])
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Button
          size="sm"
          color="ghost"
          shape="circle"
          className="absolute right-2 top-2"
        >
          x
        </Button>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click on X button to close</Modal.Body>
      </Modal>
    </div>
  )
}

export const CustomWidth: Story<ModalProps> = (args) => {
  const ref = useRef<HTMLDialogElement>(null)
  const handleShow = useCallback(() => {
    ref.current?.showModal()
  }, [ref])
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

CustomWidth.args = {
  className: 'w-11/12 max-w-5xl',
}

export const UseDialogHook: Story<ModalProps> = (args) => {
  const { Dialog, handleShow } = Modal.useDialog()
  return (
    <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Dialog {...args}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with useDialog hook!</Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Dialog>
    </div>
  )
}
