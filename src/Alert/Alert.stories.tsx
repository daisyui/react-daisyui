import React from 'react'
import { Story, Meta } from '@storybook/react'

import Alert, { AlertProps } from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta

export const Default: Story<AlertProps> = (args) => {
  return (
    <Alert {...args}>
      Lorem ipsum dolor sit amet, consectetur adip!
    </Alert>
  )
}
Default.args = {
  status: 'info'
}
