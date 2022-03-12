import React from 'react'
import { Story, Meta } from '@storybook/react'

import Checkbox, { CheckboxProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/Checkbox',
  component: Checkbox,
} as Meta

export const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />
}

export const Default = Template.bind({})
Default.args = {}

const FormTemplate: Story<CheckboxProps> = (args) => {
  return (
    <Form className='shadow bg-base-200 w-64 rounded-lg p-4'>
      <label className="label cursor-pointer">
        <span className="label-text">Remember me</span> 
        <Checkbox {...args} />
      </label>
    </Form>
  )
}
export const FormControl = FormTemplate.bind({})
FormControl.args = {}

export const FormControlPrimary = FormTemplate.bind({})
FormControlPrimary.args = { color: 'primary' }

export const FormControlSecondary = FormTemplate.bind({})
FormControlSecondary.args = { color: 'secondary' }

export const FormControlAccent = FormTemplate.bind({})
FormControlAccent.args = { color: 'accent' }

export const Sizes: Story<CheckboxProps> = (args) => {
  return (
    <div className='flex flex-col gap-2'>
      <Checkbox {...args} />
      <Checkbox {...args} />
      <Checkbox {...args} />
      <Checkbox {...args} />
    </div>
  )
}
Sizes.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledChecked = Template.bind({})
DisabledChecked.args = { checked: true, disabled: true }
