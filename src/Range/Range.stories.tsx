import React from 'react'
import { Story, Meta } from '@storybook/react'

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

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }

export const SecondaryColor = Template.bind({})
SecondaryColor.args = { color: 'secondary' }

export const AccentColor = Template.bind({})
AccentColor.args = { color: 'accent' }

export const Sizes: Story<RangeProps> = (args) => {
  return (
    <div className="flex flex-col gap-2">
      <Range {...args} value="40" size="xs" />
      <Range {...args} value="50" size="sm" />
      <Range {...args} value="60" size="md" />
      <Range {...args} value="70" size="lg" />
    </div>
  )
}
