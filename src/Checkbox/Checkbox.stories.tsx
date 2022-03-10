import React from 'react'
import { Story, Meta } from '@storybook/react'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Data Input/Checkbox',
  component: Checkbox,
} as Meta

export const Default: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />
}

Default.args = {}
