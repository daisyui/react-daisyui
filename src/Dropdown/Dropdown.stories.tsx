import React from 'react'
import { Story, Meta } from '@storybook/react'

import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Actions/Dropdown',
  component: Dropdown,
  argTypes: {
    item: {
      control: false,
    },
  },
} as Meta

export const Default: Story<DropdownProps> = (args) => {
  return (
    <div className="mb-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
