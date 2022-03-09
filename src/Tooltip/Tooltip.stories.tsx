import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tooltip, { TooltipProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
} as Meta

export const Default: Story<TooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  )
}
Default.args = {
  message: 'hello',
}
