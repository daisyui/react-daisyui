import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react-vite'

import BrowserMockup, { BrowserMockupProps } from '.'

export default {
  title: 'Mockup/BrowserMockup',
  component: BrowserMockup,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    url: 'https://react.daisyui.com',
    className: 'w-full',
  },
} as Meta

const Template: Story<BrowserMockupProps> = (args) => (
  <BrowserMockup {...args}>Hello!</BrowserMockup>
)

export const Default = Template.bind({})
Default.args = {}

export const WithBackgroundColor = Template.bind({})
WithBackgroundColor.args = {
  variant: 'background',
}

export const WithCustomBorderColor = Template.bind({})
WithCustomBorderColor.args = {
  className: 'w-full border-primary',
  inputClassName: 'border-primary',
}

export const WithCustomBackgroundColor = Template.bind({})
WithCustomBackgroundColor.args = {
  variant: 'background',
  className: 'bg-warning',
  innerClassName: 'bg-info info-content',
}
