import React from 'react'
import { Story, Meta } from '@storybook/react'

import RadialProgress, { RadialProgressProps } from '.'

export default {
  title: 'Data Display/Radial Progress',
  component: RadialProgress,
} as Meta

const Template: Story<RadialProgressProps> = (args) => {
  return <RadialProgress {...args}>{args.value}%</RadialProgress>
}

export const Default = Template.bind({})
Default.args = {
  value: 75,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  value: 75,
  color: 'primary',
}

export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  value: 75,
  className: 'bg-primary text-primary-content border-4 border-primary',
}

export const CustomSizeAndThickness: Story<RadialProgressProps> = (args) => {
  return (
    <div className="flex items-center gap-4">
      <RadialProgress value={70} size="12rem" thickness="2px">
        70%
      </RadialProgress>
      <RadialProgress value={80} size="12rem" thickness="2rem">
        80%
      </RadialProgress>
    </div>
  )
}
CustomSizeAndThickness.args = {}
