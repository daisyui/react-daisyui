import React from 'react'
import { Story, Meta } from '@storybook/react'

import Indicator, { IndicatorProps } from '.'
import Avatar from '../Avatar'
import Badge from '../Badge'

export default {
  title: 'Layout/Indicator',
  component: Indicator,
} as Meta

export const Default: Story<IndicatorProps> = (args) => {
  return <Indicator {...args} />
}

Default.args = {
  children: (
    <Avatar src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
  ),
  item: <Badge color="error" />,
}
