import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Shared Components/Button',
  component: Button,
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return <Button href="/asdg" {...args} />
}
Default.args = {
  children: <span>Button</span>,
  color: 'primary',
}
