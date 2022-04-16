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
      <Modal {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header>Lorem Ipsum</Modal.Header>

        <Modal.Body>
          Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
          adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
          quasi eligendi. Saepe velit autem minima.
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible} color="primary">
            Accept
          </Button>
          <Button onClick={toggleVisible}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}
Default.args = {}
