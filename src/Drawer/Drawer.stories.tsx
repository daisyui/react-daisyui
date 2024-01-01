import React, { useState, useCallback } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Drawer, { DrawerProps } from '.'
import Button from '../Button'
import Navbar from '../Navbar'
import Menu from '../Menu'

export default {
  title: 'Layout/Drawer',
  component: Drawer,
  argTypes: {
    side: {
      control: false,
    },
  },
} as Meta

export const Default: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible)
  }, [])
  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>
      }
    >
      <Button color="primary" onClick={toggleVisible}>
        Open drawer
      </Button>
    </Drawer>
  )
}
Default.args = {
  sideClassName: 'h-full absolute',
  contentClassName: 'flex h-56 items-center justify-center',
}

export const Responsive: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible)
  }, [])
  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>
      }
    >
      <Button color="primary" onClick={toggleVisible} className="lg:hidden">
        Open drawer
      </Button>
    </Drawer>
  )
}
Responsive.args = {
  className: 'lg:drawer-open',
  sideClassName: 'h-full absolute',
  contentClassName: 'flex h-56 items-center justify-center',
}

export const NavbarMenuForDesktopSidebarDrawerForMobile: Story<DrawerProps> = (
  args
) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible)
  }, [])

  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className="p-4 w-60 md:w-80 h-full bg-base-200">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>
      }
    >
      <Navbar className="w-full bg-base-300">
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
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
      <div className="flex flex-grow items-center justify-center">Content</div>
    </Drawer>
  )
}
NavbarMenuForDesktopSidebarDrawerForMobile.args = {
  className: 'h-56 rounded overflow-hidden',
  contentClassName: 'flex flex-col',
}

export const RightSideOfPage: Story<DrawerProps> = (args) => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible)
  }, [])
  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>
      }
    >
      <Button color="primary" onClick={toggleVisible}>
        Open drawer
      </Button>
    </Drawer>
  )
}
RightSideOfPage.args = {
  sideClassName: 'h-full absolute',
  contentClassName: 'flex h-56 items-center justify-center',
  end: true,
}
