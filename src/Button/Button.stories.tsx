import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return (
    <Button {...args} />
  )
}
Default.args = {
  children: <span>Button</span>,
  color: 'primary',
}
