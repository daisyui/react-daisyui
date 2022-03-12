import React from 'react'
import { Story, Meta } from '@storybook/react'

import RadialProgress, { RadialProgressProps } from '.'

export default {
  title: 'Data Display/Radial Progress',
  component: RadialProgress,
} as Meta

export const Default: Story<RadialProgressProps> = (args) => {
  return <RadialProgress {...args}>{args.value}%</RadialProgress>
}

Default.args = {
  value: 75,
}
