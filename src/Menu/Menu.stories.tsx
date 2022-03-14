import React from 'react'
import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'

export default {
  title: 'Navigation/Menu',
  component: Menu,
} as Meta

export const Default: Story<MenuProps> = (args) => {
  return (
    <div className="bg-base-200">
      <Menu {...args} className="bg-base-100 w-56">
        <Menu.Title>
          <a>This is a title</a>
        </Menu.Title>
        <Menu.Item>
          <a>Item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a>Item 2</a>
        </Menu.Item>
        <Menu.Item>
          <a className="active">Item 3</a>
        </Menu.Item>
        <Menu.Item>
          <a>Item 4</a>
        </Menu.Item>
        <Menu.Item disabled>
          <a>Item 5 (Disabled)</a>
        </Menu.Item>
        <Menu.Item>
          <a>Item 6</a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
