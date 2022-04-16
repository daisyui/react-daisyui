import React from 'react'
import { Story, Meta } from '@storybook/react'

import Tooltip, { TooltipProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
} as Meta

const Template: Story<TooltipProps> = (args) => {
  return (
    <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  message: 'hello',
}

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  message: 'hello',
  open: true,
}

export const Bottom = Template.bind({})
Bottom.args = {
  message: 'hello',
  open: true,
  position: 'bottom',
}

export const Left = Template.bind({})
Left.args = {
  message: 'hello',
  open: true,
  position: 'left',
}

export const Right = Template.bind({})
Right.args = {
  message: 'hello',
  open: true,
  position: 'right',
}

export const Colors: Story<TooltipProps> = (args) => {
  return (
    <div className="flex gap-2 mt-6">
      <Tooltip {...args} color="primary" message="primary">
        <Button color="primary">Primary</Button>
      </Tooltip>

      <Tooltip {...args} color="secondary" message="secondary">
        <Button color="secondary">Secondary</Button>
      </Tooltip>

      <Tooltip {...args} color="accent" message="accent">
        <Button color="accent">Accent</Button>
      </Tooltip>
    </div>
  )
}
Colors.args = {
  open: true,
}

export const Statuses: Story<TooltipProps> = (args) => {
  return (
    <div className="flex gap-2 mt-6">
      <Tooltip {...args} color="info" message="info">
        <Button color="info">Info</Button>
      </Tooltip>

      <Tooltip {...args} color="success" message="success">
        <Button color="success">Success</Button>
      </Tooltip>

      <Tooltip {...args} color="warning" message="warning">
        <Button color="warning">Warning</Button>
      </Tooltip>

      <Tooltip {...args} color="error" message="error">
        <Button color="error">Error</Button>
      </Tooltip>
    </div>
  )
}
Statuses.args = {
  open: true,
}
