import React from 'react'
import { Story, Meta } from '@storybook/react'

import Toggle, { ToggleProps } from '.'

export default {
  title: 'Data Input/Toggle',
  component: Toggle,
} as Meta

export const Default: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />
}

Default.args = {}
