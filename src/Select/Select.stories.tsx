import React from 'react'
import { Story, Meta } from '@storybook/react'

import Select, { SelectProps } from '.'

const { Option } = Select

export default {
  title: 'Select',
  component: Select,
} as Meta

export const Default: Story<SelectProps<string>> = (args) => {
  return (
    <Select {...args}>
      <Option value={1}>A</Option>
      <Option value={2}>B</Option>
      <Option value={3}>C</Option>
    </Select>
  )
}
Default.args = {
  onChange: (e) => console.log(e)
}
