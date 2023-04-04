import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Radio, { RadioProps } from '.'
import Form from '../Form'

export default {
  title: 'Data Input/Radio',
  component: Radio,
} as Meta

const Template: Story<RadioProps> = (args) => {
  return (
    <Form>
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </Form>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Colors: Story<RadioProps> = (args) => (
  <div className="flex flex-col items-center float-left gap-2">
    <Radio {...args} defaultChecked color="primary" />
    <Radio {...args} defaultChecked color="secondary" />
    <Radio {...args} defaultChecked color="accent" />
    <Radio {...args} defaultChecked color="success" />
    <Radio {...args} defaultChecked color="warning" />
    <Radio {...args} defaultChecked color="info" />
    <Radio {...args} defaultChecked color="error" />
  </div>
)
Colors.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const WithLabelsAndForm: Story<RadioProps> = (args) => {
  return (
    <div className="bg-base-200 w-1/4 p-4 rounded-lg shadow">
      <Form>
        <Form.Label title="Red Pill">
          <Radio
            {...args}
            name="radio1"
            className="checked:bg-red-500"
            defaultChecked
          />
        </Form.Label>
      </Form>
      <Form>
        <Form.Label title="Blue Pill">
          <Radio
            {...args}
            name="radio1"
            className="checked:bg-blue-500"
            defaultChecked
          />
        </Form.Label>
      </Form>
    </div>
  )
}
