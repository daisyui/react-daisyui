import React from 'react'
import { Story, Meta } from '@storybook/react'

import Dropdown, { DropdownProps } from '.'
import Button from '../Button'
import Menu from '../Menu'

export default {
  title: 'Actions/Dropdown',
  component: Dropdown,
} as Meta

export const Default: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
        <Button>Click me</Button>
    </Dropdown>
  )
}
Default.args = {
    item: (
        <Menu className="bg-base-100 w-56">
            <Menu.Item>
                <a>Item 1</a>
            </Menu.Item>
            <Menu.Item>
                <a>Item 2</a>
            </Menu.Item>
            <Menu.Item>
                <a className="active">Item 3</a>
            </Menu.Item>
        </Menu>
    )
}
