import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Modal, { ModalProps } from '.'
import Button from '../Button'

export default {
  title: 'Modal',
  component: Modal,
} as Meta

export const Default: Story<ModalProps> = (args) => {
  const [visible, toggleVisible] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => toggleVisible(!visible)}>Open Modal</Button>
      <Modal
        {...args}
        open={visible}
        onCancel={() => toggleVisible(false)}
      >
        Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.
      </Modal>
    </>
  )
}
Default.args = {}
