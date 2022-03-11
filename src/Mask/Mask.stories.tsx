import React from 'react'
import { Story, Meta } from '@storybook/react'

import Mask, { MaskProps } from '.'

export default {
  title: 'Layout/Mask',
  component: Mask,
} as Meta

export const Default: Story<MaskProps> = (args) => {
  return <Mask {...args} />
}

Default.args = {
  src: 'https://api.lorem.space/image/shoes?w=160&h=160',
  variant: 'squircle',
}
