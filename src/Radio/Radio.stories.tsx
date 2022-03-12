import React from 'react'
import { Story, Meta } from '@storybook/react'

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

export const PrimaryColor = Template.bind({})
PrimaryColor.args = { color: 'primary' }

export const SecondaryColor = Template.bind({})
SecondaryColor.args = { color: 'secondary' }

export const AccentColor = Template.bind({})
AccentColor.args = { color: 'accent' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const WithLabelsAndForm: Story<RadioProps> = (args) => {
  return (
    <div className='bg-base-200 w-1/4 p-4 rounded-lg shadow'>
      <Form>
        <label className="label cursor-pointer">
          <span className="label-text">Red pill</span> 
          <Radio {...args} name="radio1" className='checked:bg-red-500' defaultChecked />
        </label>
      </Form>
      <Form>
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span> 
          <Radio {...args} name="radio1" className='checked:bg-blue-500' defaultChecked />
        </label>
      </Form>
    </div>
  )
}
