import React from 'react'
import { Story, Meta } from '@storybook/react'
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
      <Button className="text-xl normal-case" color="ghost">
        daisyUI
      </Button>
    </Navbar>
  )
}

export const WithTitleAndIcon: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start>
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar.Start>
      <Navbar.End>
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
      </Navbar.End>
    </Navbar>
  )
}

export const WithIconAtStartAndEnd: Story<NavbarProps> = (args) => {
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
        <Button className="text-xl normal-case" color="ghost">
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

export const WithMenuAndSubmenu: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal className="p-0">
          <Menu.Item>
            <a>Item 1</a>
          </Menu.Item>
          <Menu.Item tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <Menu className="p-2 bg-base-100">
              <Menu.Item>
                <a>Submenu 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>Submenu 2</a>
              </Menu.Item>
            </Menu>
          </Menu.Item>
          <Menu.Item>
            <a>Item 3</a>
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  )
}
WithMenuAndSubmenu.parameters = {
  containerClassName: 'pb-40'
}

export const WithSearchInputAndDropdown: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none gap-2">
        <Form>
          <Input bordered type="text" placeholder="Search" />
        </Form>
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
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
WithSearchInputAndDropdown.parameters = {
  containerClassName: 'pb-40'
}

export const WithIconIndicatorAndDropdown: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <div className="flex-1">
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Dropdown vertical="end">
          <Button tabIndex={0} color="ghost" shape="circle">
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
          <Dropdown.Menu
            tabIndex={0}
            className="mt-3 card card-compact  w-52 bg-base-100 !p-0"
          >
            <Card.Body className="card-body">
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
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
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
WithIconIndicatorAndDropdown.parameters = {
  containerClassName: 'pb-40'
}

export const WithDropdownCenterLogoAndIcon: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start>
        <Dropdown>
          <Button color="ghost" shape="circle" tabIndex={0}>
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
          <Dropdown.Menu tabIndex={0} className="menu-compact w-52">
            <Dropdown.Item>Homepage</Dropdown.Item>
            <Dropdown.Item>Portfolio</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Start>
      <Navbar.Center>
        <Button color="ghost" className="normal-case text-xl">
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
WithDropdownCenterLogoAndIcon.parameters = {
  containerClassName: 'pb-40'
}

export const Responsive: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start>
        <Dropdown>
          <Button color="ghost" tabIndex={0} className="lg:hidden">
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
          <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
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
        <Menu horizontal className="p-0">
          <Menu.Item>
            <a>Item 1</a>
          </Menu.Item>
          <Menu.Item tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <Menu className="p-2 bg-base-100">
              <Menu.Item>
                <a>Submenu 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>Submenu 2</a>
              </Menu.Item>
            </Menu>
          </Menu.Item>
          <Menu.Item>
            <a>Item 3</a>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Button>Get started</Button>
      </Navbar.End>
    </Navbar>
  )
}
Responsive.parameters = {
  containerClassName: 'pb-40'
}

export const WithColors: Story<NavbarProps> = ({ className, ...args }) => {
  return (
    <>
      <Navbar
        {...args}
        className={twMerge(className, 'bg-neutral text-neutral-content')}
      >
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
      <Navbar {...args} className={twMerge(className, 'bg-base-300')}>
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
      <Navbar
        {...args}
        className={twMerge(className, 'bg-primary text-primary-content')}
      >
        <Button className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </Navbar>
    </>
  )
}
