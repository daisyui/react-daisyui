import React from 'react'
import { Story, Meta } from '@storybook/react'

import Drawer, { DrawerProps } from '.'

export default {
  title: 'Layout/Drawer',
  component: Drawer,
} as Meta

export const Default: Story<DrawerProps> = (args) => {
  const side = (
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200">
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </ul>
  )

  return (
    <Drawer {...args} id="sidebar-id" className="h-screen w-full" side={side}>
      <div className="w-full flex items-center justify-center">
        <label htmlFor="sidebar-id" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
    </Drawer>
  )
}

Default.args = {}
