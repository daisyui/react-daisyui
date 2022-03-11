import React from 'react'
import { Story, Meta } from '@storybook/react'

import Stack, { StackProps } from '.'

export default {
  title: 'Layout/Stack',
  component: Stack,
} as Meta

export const Default: Story<StackProps> = (args) => {
  return (
    <Stack {...args}>
      <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
        1
      </div>
      <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
        2
      </div>
      <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
        3
      </div>
    </Stack>
  )
}

Default.args = {}
