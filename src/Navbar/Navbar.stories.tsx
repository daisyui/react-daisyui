import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import { twMerge } from 'tailwind-merge'

import Navbar, { NavbarProps } from '.'
import Button from '../Button'
import Menu from '../Menu'
import Dropdown from '../Dropdown'
import Form from '../Form'
import Input from '../Input'
import Indicator from '../Indicator'
import Badge from '../Badge'
import Card from '../Card'

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  args: {
    className: 'bg-base-100 shadow-xl rounded-box',
  },
} as Meta

export const Default: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Button tag="a" className="text-xl normal-case" color="ghost">
        daisyUI
      </Button>
    </Navbar>
  )
}

export const TitleAndIcon: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Button tag="a" shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </Button>
      </div>
    </Navbar>
  )
}

export const IconAtStartAndEnd: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-none">
        <Button shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
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
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Button shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </Button>
      </div>
    </Navbar>
  )
}

export const MenuAndSubmenu: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <a>Link</a>
          </Menu.Item>
          <Menu.Item>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  )
}
MenuAndSubmenu.args = {
  className: 'bg-base-100 mb-32 shadow-xl rounded-box',
}

export const SearchInputAndDropdown: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none gap-2">
        <Form>
          <Input
            bordered
            type="text"
            placeholder="Search"
            className="w-24 md:w-auto"
          />
        </Form>
        <Dropdown end>
          <Button
            tag="label"
            tabIndex={0}
            color="ghost"
            className="avatar"
            shape="circle"
          >
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-sm mt-3 z-[1] p-2">
            <li>
              <a className="justify-between">
                Profile
                <Badge>New</Badge>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  )
}
SearchInputAndDropdown.args = {
  className: 'bg-base-100 mb-32 shadow-xl round-box',
}

export const IconIndicatorAndDropdown: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Dropdown end>
          <Button tag="label" tabIndex={0} color="ghost" shape="circle">
            <Indicator item={<Badge size="sm">8</Badge>}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Indicator>
          </Button>
          <Dropdown.Menu className="mt-3 z-[1] card card-compact w-52 !p-0">
            <Card.Body>
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <Card.Actions>
                <Button color="primary" fullWidth>
                  View cart
                </Button>
              </Card.Actions>
            </Card.Body>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown end>
          <Button
            tag="label"
            tabIndex={0}
            color="ghost"
            className="avatar"
            shape="circle"
          >
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </Button>
          <Dropdown.Menu className="mt-3 z-[1] w-52 menu-sm">
            <li>
              <a className="justify-between">
                Profile
                <Badge className="badge">New</Badge>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  )
}
IconIndicatorAndDropdown.args = {
  className: 'bg-base-100 mb-40 shadow-xl rounded-box',
}

export const DropdownCenterLogoAndIcon: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" shape="circle" tabIndex={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </Button>
          <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
            <Dropdown.Item>Homepage</Dropdown.Item>
            <Dropdown.Item>Portfolio</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Start>
      <Navbar.Center>
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </Navbar.Center>
      <Navbar.End className="navbar-end">
        <Button color="ghost" shape="circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
        <Button color="ghost" shape="circle">
          <Indicator item={<Badge size="xs" color="primary" />}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Indicator>
        </Button>
      </Navbar.End>
    </Navbar>
  )
}
DropdownCenterLogoAndIcon.args = {
  className: 'bg-base-100 mb-40 shadow-xl rounded-box',
}

export const Responsive: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="px-1">
          <Menu.Item>
            <a>Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <Menu.Item>
                  <a>Submenu 1</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Submenu 2</a>
                </Menu.Item>
              </ul>
            </details>
          </Menu.Item>
          <Menu.Item>
            <a>Item 3</a>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Button tag="a">Button</Button>
      </Navbar.End>
    </Navbar>
  )
}
Responsive.args = {
  className: 'bg-base-100 mb-48 shadow-xl rounded-box',
}

export const Colors: Story<NavbarProps> = (args) => {
  return (
    <>
      <Navbar
        {...args}
        className={'rounded-box bg-neutral text-neutral-content'}
      >
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
      <Navbar {...args} className={'rounded-box bg-base-300'}>
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
      <Navbar
        {...args}
        className={'rounded-box bg-primary text-primary-content'}
      >
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    </>
  )
}
Colors.argTypes = {
  className: {
    control: false,
  },
}
