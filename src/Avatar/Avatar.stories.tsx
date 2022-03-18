import React from 'react'
import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from '.'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
}

export const Rounded = Template.bind({})
Rounded.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  shape: 'circle',
}

export const Group: Story<AvatarProps> = (args) => {
  return (
    <Avatar.Group>
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
    </Avatar.Group>
  )
}
Group.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
}

export const Ring = Template.bind({})
Ring.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  border: true,
  borderColor: 'primary',
  shape: 'circle',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  shape: 'circle',
  letters: 'Y',
}
