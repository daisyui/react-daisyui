import React from 'react'
import { Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from '.'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

export const Default: Story<AvatarProps> = (args) => {
  return (
    <Avatar {...args} />
  )
}
Default.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
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
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
}
