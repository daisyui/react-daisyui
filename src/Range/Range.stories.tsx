import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Range, { RangeProps } from '.'

export default {
  title: 'Data Input/Range',
  component: Range,
} as Meta

const Template: Story<RangeProps> = (args) => {
  return <Range {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const WithSteps = Template.bind({})
WithSteps.args = { step: 25 }

export const Colors: Story<RangeProps> = (args) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="20" color="primary" />
      <Range {...args} defaultValue="30" color="secondary" />
      <Range {...args} defaultValue="40" color="accent" />
      <Range {...args} defaultValue="50" color="success" />
      <Range {...args} defaultValue="60" color="warning" />
      <Range {...args} defaultValue="70" color="info" />
      <Range {...args} defaultValue="80" color="error" />
    </div>
  )
}
Colors.args = {}

export const Sizes: Story<RangeProps> = (args) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="40" size="xs" />
      <Range {...args} defaultValue="50" size="sm" />
      <Range {...args} defaultValue="60" size="md" />
      <Range {...args} defaultValue="70" size="lg" />
    </div>
  )
}
