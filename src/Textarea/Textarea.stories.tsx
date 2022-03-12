import React from 'react'
import { Story, Meta } from '@storybook/react'

import Textarea, { TextareaProps } from '.'

export default {
  title: 'Data input/TextArea',
  component: Textarea,
} as Meta

export const Default: Story<TextareaProps> = (args) => {
  return <Textarea {...args} bordered />
}
