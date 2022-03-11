import React from 'react'
import { Story, Meta } from '@storybook/react'

import Drawer, { DrawerProps } from '.'

export default {
  title: 'Layout/Drawer',
  component: Drawer,
} as Meta

export const Default: Story<DrawerProps> = (args) => {
  const drawerContent = (
    <div className="flex flex-col items-center justify-center align-middle drawer-content">
      <h1>Some drawer content! 🍉 (Not required)</h1>
    </div>
  )

  return (
    <>
      <div className="flex flex-col items-center justify-center p-2">
        <label htmlFor="sidebar-id">
          👀 Open/Close drawer by alternating the Storybook controls below 👇
        </label>
      </div>

      <Drawer
        {...args}
        id="sidebar-id"
        className="h-screen w-full bg-base-100 rounded border"
        drawerContent={drawerContent}
      >
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </Drawer>
    </>
  )
}

Default.args = {
  open: true,
}
