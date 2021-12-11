import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tooltip, { TooltipProps } from '.'
import { Button } from '..'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta

export const Default: Story<TooltipProps> = (args) => {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}
Default.args = {
  message: 'hello',
}
