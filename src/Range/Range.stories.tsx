import React from 'react'
import { Story, Meta } from '@storybook/react'

import Range, { RangeProps } from '.'

export default {
  title: 'Data Input/Range',
  component: Range,
} as Meta

export const Default: Story<RangeProps> = (args) => {
  return <Range {...args} />
}

Default.args = {}
