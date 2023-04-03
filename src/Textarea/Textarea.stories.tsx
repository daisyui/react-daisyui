import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

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
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Textarea {...args} />
    </div>
  )
}

export const FormControlAndLabels: Story<TextareaProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
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
    </div>
  )
}
