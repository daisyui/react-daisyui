import React from 'react'
import { Story, Meta } from '@storybook/react'

import Badge, { BadgeProps } from '.'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Default: Story<BadgeProps> = (args) => {
  return (
    <Badge {...args}>Example</Badge>
  )
}
Default.args = {}
