import React from 'react'
import { Story, Meta } from '@storybook/react'

import Swap, { SwapProps } from '.'

export default {
  title: 'Actions/Swap',
  component: Swap,
} as Meta

export const Default: Story<SwapProps> = (args) => {
  return <Swap {...args} />
}

Default.args = {
  onElement: <>ON</>,
  offElement: <>OFF</>,
}
