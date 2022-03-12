import React from 'react'
import { Story, Meta } from '@storybook/react'

import Kbd, { KbdProps } from '.'

export default {
  title: 'Data Display/Kbd',
  component: Kbd,
} as Meta

export const Default: Story<KbdProps> = (args) => {
  return (
    <>
      <Kbd {...args}>ctrl</Kbd>+<Kbd {...args}>shift</Kbd>+
      <Kbd {...args}>del</Kbd>
    </>
  )
}

Default.args = {}
