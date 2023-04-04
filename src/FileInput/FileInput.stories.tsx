import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import FileInput, { FileInputProps } from '.'

export default {
  title: 'Data Input/FileInput',
  component: FileInput,
  args: {
    className: 'w-full max-w-xs',
    disabled: false,
  },
} as Meta

const Template: Story<FileInputProps> = (args) => {
  return <FileInput {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Colors: Story<FileInputProps> = (args) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <FileInput {...args} color="primary" />
      <FileInput {...args} color="secondary" />
      <FileInput {...args} color="accent" />
      <FileInput {...args} color="ghost" />
      <FileInput {...args} color="info" />
      <FileInput {...args} color="success" />
      <FileInput {...args} color="warning" />
      <FileInput {...args} color="error" />
    </div>
  )
}
Colors.args = {}

export const Sizes: Story<FileInputProps> = (args) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <FileInput {...args} size="xs" />
      <FileInput {...args} size="sm" />
      <FileInput {...args} size="md" />
      <FileInput {...args} size="lg" />
    </div>
  )
}
Sizes.args = {}

export const FormControlAndLabels: Story<FileInputProps> = (args) => {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <FileInput {...args} />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>
  )
}
FormControlAndLabels.args = {}
