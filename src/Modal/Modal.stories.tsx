import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '.'
import Button from '../Button'

export default {
  title: 'Actions/Modal',
  component: Modal,
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export const CloseButton: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
    </>
  )
}

export const ClickedOutside: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
    </>
  )
}

export const CustomWidth: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

CustomWidth.args = {
  className: 'w-11/12 max-w-5xl',
}
