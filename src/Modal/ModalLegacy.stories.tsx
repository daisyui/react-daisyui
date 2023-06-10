import React, { useState } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Modal, { ModalLegacyProps as ModalProps } from '.'
import Button from '../Button'

export default {
  title: 'Actions/Modal/Legacy',
  component: Modal.Legacy,
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>
  )
}

export const ClickedOutside: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click outside to close</Modal.Body>
      </Modal.Legacy>
    </div>
  )
}

export const CloseButton: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Button
          size="sm"
          color="ghost"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click on X button to close</Modal.Body>
      </Modal.Legacy>
    </div>
  )
}

export const CustomWidth: Story<ModalProps> = (args) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>
        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>
  )
}

CustomWidth.args = {
  className: 'w-11/12 max-w-5xl',
}
