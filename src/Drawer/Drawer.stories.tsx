import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Drawer, { DrawerProps } from '.'
import Button from '../Button'
import Navbar from '../Navbar'
import Menu from '../Menu'

const side = (
  <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>
)

export default {
  title: 'Layout/Drawer',
  component: Drawer,
  args: {
    side,
  },
} as Meta

export const Default: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }
  return (
    <Drawer {...args} open={visible} onClickOverlay={toggleVisible}>
      <div className="flex h-56 items-center justify-center">
        <Button color="primary" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
    </Drawer>
  )
}

export const ForMobileFixedSidebarForDesktop: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <Drawer {...args} open={visible} onClickOverlay={toggleVisible}>
      <div className="flex h-56 items-center justify-center">
        <Button color="primary" className="lg:hidden" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
    </Drawer>
  )
}

ForMobileFixedSidebarForDesktop.args = {
  mobile: true,
}

export const NavbarMenuForDesktopSidebarDrawerForMobile: Story<DrawerProps> = (
  args
) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
    >
      <Navbar>
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            <Menu.Item>
              <a>Navbar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Navbar Item 2</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
      <div className="flex h-36 items-center justify-center">Content</div>
    </Drawer>
  )
}
