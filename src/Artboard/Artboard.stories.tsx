import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Artboard, { ArtboardProps } from '.'

export default {
  title: 'Layout/Artboard',
  component: Artboard,
} as Meta

const Template: Story<ArtboardProps> = ({ children, ...args }) => {
  return <Artboard {...args}>{children}</Artboard>
}
export const Default = Template.bind({})
Default.args = {
  size: 1,
  children: ' 320×568',
}

export const Size2 = Template.bind({})
Size2.args = {
  size: 2,
  children: ' 375×667',
}

export const Size3 = Template.bind({})
Size3.args = {
  size: 3,
  children: ' 414×736',
}

export const Size4 = Template.bind({})
Size4.args = {
  size: 4,
  children: ' 375×812',
}

export const Size5 = Template.bind({})
Size5.args = {
  size: 5,
  children: ' 414×896',
}

export const Size6 = Template.bind({})
Size6.args = {
  size: 6,
  children: ' 320×1024',
}

export const HorizontalSize1 = Template.bind({})
HorizontalSize1.args = {
  size: 1,
  children: '568×320',
  horizontal: true,
}

export const HorizontalSize2 = Template.bind({})
HorizontalSize2.args = {
  size: 2,
  children: ' 667×375',
  horizontal: true,
}

export const HorizontalSize3 = Template.bind({})
HorizontalSize3.args = {
  size: 3,
  children: ' 736×414',
  horizontal: true,
}

export const HorizontalSize4 = Template.bind({})
HorizontalSize4.args = {
  size: 4,
  children: ' 812×375',
  horizontal: true,
}

export const HorizontalSize5 = Template.bind({})
HorizontalSize5.args = {
  size: 5,
  children: ' 896×414',
  horizontal: true,
}

export const HorizontalSize6 = Template.bind({})
HorizontalSize6.args = {
  size: 6,
  children: ' 1024×320',
  horizontal: true,
}
