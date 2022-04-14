import React from 'react'
import { Story, Meta } from '@storybook/react'

import WindowMockup, { WindowMockupProps } from '.'
import { componentColors } from '../constants'

const meta: Meta = {
  title: `Mockup/WindowMockup`,
  component: WindowMockup,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    color: { control: { type: 'select', options: componentColors } },
  },
}

export default meta

const Template: Story<WindowMockupProps> = (args) => {
  return (
    <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithBorder = Template.bind({})
WithBorder.args = { border: true }

export const WithBorderColor = Template.bind({})
WithBorderColor.args = { border: true, borderColor: 'primary' }

export const WithCustomFrameColor = Template.bind({})
WithCustomFrameColor.args = {
  border: true,
  borderColor: 'primary',
  frameColor: 'primary',
}

export const WithBackgroundColor = Template.bind({})
WithBackgroundColor.args = { backgroundColor: 'base-300' }

export const WithFrameAndBackgroundColor = Template.bind({})
WithFrameAndBackgroundColor.args = {
  border: true,
  borderColor: 'primary',
  frameColor: 'primary',
  backgroundColor: 'base-300',
}
