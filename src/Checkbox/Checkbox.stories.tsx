import React from 'react'
import { Story, Meta } from '@storybook/react'

import Checkbox, { CheckboxProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}

const FormTemplate: Story<CheckboxProps> = (args) => {
  return (
    <Form className="shadow bg-base-200 w-64 rounded-lg p-4">
      <Form.Label title="Remember me">
        <Checkbox {...args} />
      </Form.Label>
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
    <div className="flex flex-col items-center float-left gap-2">
      <Checkbox {...args} checked size="xs" />
      <Checkbox {...args} checked size="sm" />
      <Checkbox {...args} checked size="md" />
      <Checkbox {...args} checked size="lg" />
    </div>
  )
}
Sizes.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledChecked = Template.bind({})
DisabledChecked.args = { checked: true, disabled: true }
