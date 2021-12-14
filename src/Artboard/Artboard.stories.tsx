import React from 'react'
import { Story, Meta } from '@storybook/react'

import Artboard, { ArtboardProps } from '.'

export default {
  title: 'Artboard',
  component: Artboard,
} as Meta

export const Default: Story<ArtboardProps> = (args) => {
  return (
    <Artboard {...args}>Example</Artboard>
  )
}
Default.args = {}
