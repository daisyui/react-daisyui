import React from 'react'
import { Story, Meta } from '@storybook/react'

import Divider, { DividerProps } from '.'

export default {
  title: 'Layout/Divider',
  component: Divider,
} as Meta

export const Default: Story<DividerProps> = (args) => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  )
}
Default.args = {}

export const Vertical: Story<DividerProps> = (args) => {
  return (
    <div className="flex flex-row w-full">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  )
}
Vertical.args = {
  vertical: true,
}
