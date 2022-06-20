import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '.'

export default {
  title: 'Data Input/Input',
  component: Input,
  args: {
    placeholder: 'Type here',
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta

export const Default: Story<InputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Input {...args} />
    </div>
  )
}

export const FormControlAndLabels: Story<InputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Input {...args} />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>
  )
}
