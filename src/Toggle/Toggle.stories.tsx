import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Toggle, { ToggleProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/Toggle',
  component: Toggle,
} as Meta

const Template: Story<ToggleProps> = (args) => {
  return <Toggle {...args} />
}

export const Default = Template.bind({})
Default.args = {}

const FormTemplate: Story<ToggleProps> = (args) => {
  return (
    <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>
  )
}

export const WithLabelAndForm = FormTemplate.bind({})
WithLabelAndForm.args = {}

export const Colors: Story<ToggleProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
      <Toggle {...args} defaultChecked color="secondary" />
      <Toggle {...args} defaultChecked color="accent" />
      <Toggle {...args} defaultChecked color="success" />
      <Toggle {...args} defaultChecked color="warning" />
      <Toggle {...args} defaultChecked color="info" />
      <Toggle {...args} defaultChecked color="error" />
    </div>
  )
}
Colors.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = { disabled: true, checked: true }

export const Sizes: Story<ToggleProps> = (args) => {
  return (
    <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>
  )
}
