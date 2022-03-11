import React from 'react'
import { Story, Meta } from '@storybook/react'

import Artboard, { ArtboardProps } from '.'

export default {
  title: 'Layout/Artboard',
  component: Artboard,
} as Meta

export const Default: Story<ArtboardProps> = (args) => {
  return <Artboard {...args}>Example</Artboard>
}
Default.args = {
  size: 1,
}

export const Sizes: Story<ArtboardProps> = (args) => {
  return (
    <div className="flex w-auto space-x-10 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
      <Artboard {...args} size={1}>
        phone-1
      </Artboard>
      <Artboard {...args} size={2}>
        phone-2
      </Artboard>
      <Artboard {...args} size={3}>
        phone-3
      </Artboard>
      <Artboard {...args} size={4}>
        phone-4
      </Artboard>
      <Artboard {...args} size={5}>
        phone-5
      </Artboard>
      <Artboard {...args} size={6}>
        phone-6
      </Artboard>
    </div>
  )
}

export const Horizontal: Story<ArtboardProps> = (args) => {
  return (
    <div className="flex w-auto space-x-4 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
      <Artboard {...args} size={1} horizontal>
        phone-1
      </Artboard>
      <Artboard {...args} size={2} horizontal>
        phone-2
      </Artboard>
      <Artboard {...args} size={3} horizontal>
        phone-3
      </Artboard>
      <Artboard {...args} size={4} horizontal>
        phone-4
      </Artboard>
      <Artboard {...args} size={5} horizontal>
        phone-5
      </Artboard>
      <Artboard {...args} size={6} horizontal>
        phone-6
      </Artboard>
    </div>
  )
}
