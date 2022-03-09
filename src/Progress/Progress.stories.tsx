import React from 'react'
import { Story, Meta } from '@storybook/react'

import Progress, { ProgressProps } from '.'

export default {
  title: 'Data Display/Progress',
  component: Progress,
} as Meta

export const Default: Story<ProgressProps> = (args) => {
  return (
    <Progress {...args}/>
  )
}
Default.args = {
  value: 50,
  max: 100,
}
