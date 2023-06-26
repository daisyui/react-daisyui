import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Divider, { DividerProps } from '.'
import Card from '../Card'

export default {
  title: 'Layout/Divider',
  component: Divider,
  args: {
    children: 'OR',
  },
} as Meta

export const Default: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Default.args = {}

export const Horizontal: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex w-full ">
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Horizontal.args = {
  horizontal: true,
}

export const NoText: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
NoText.args = {
  children: '',
}

export const Responsive: Story<DividerProps> = ({ children, ...args }) => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>
  )
}
Responsive.args = {
  responsive: true,
}
