import React from 'react'
import { Story, Meta } from '@storybook/react'

import Textarea, { TextareaProps } from '.'

export default {
  title: 'Data Input/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Bio',
    disabled: false,
  },
} as Meta

export const Default: Story<TextareaProps> = (args) => {
  return (
    <Textarea {...args} />
  )
}

export const FormControlAndLabels: Story<TextareaProps> = (args) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your bio</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <Textarea {...args} />
      <label className="label">
        <span className="label-text-alt">Your bio</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
  )
}
