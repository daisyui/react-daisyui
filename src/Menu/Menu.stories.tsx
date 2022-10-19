import React from 'react'
import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'
const responsiveArgType = {
  control: 'select',
  options: [true, false, 'xs', 'sm', 'md', 'lg'],
}
export default {
  title: 'Navigation/Menu',
  component: Menu,
  args: {
    className: 'bg-base-100 w-56 shadow-xl',
  },
  argTypes: {
    compact: responsiveArgType,
    normal: responsiveArgType,
    horizontal: responsiveArgType,
    vertical: responsiveArgType,
  },
} as Meta

export const Default: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}

export const WithActiveItem: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a className="active">Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}

export const WithRoundedCorner: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
WithRoundedCorner.args = {
  className: 'bg-base-100 w-56 shadow-xl rounded-box',
}

export const WithPadding: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
WithPadding.args = {
  className: 'bg-base-100 w-56 shadow-xl p-2 rounded-box',
}

export const WithTitle: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Title>
        <span>Category</span>
      </Menu.Title>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Title>
        <span>Category</span>
      </Menu.Title>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
    </Menu>
  )
}
WithTitle.args = {
  className: 'bg-base-100 w-56 shadow-xl p-2 rounded-box',
}

export const WithBorder: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item className="bordered">
        <a>I have border</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
WithBorder.args = {
  className: 'bg-base-100 w-56 shadow-xl rounded-box',
}

export const WithBorderOnHover: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item className="hover-bordered">
        <a>Hover me</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
WithBorder.args = {
  className: 'bg-base-100 w-56 shadow-xl rounded-box',
}

export const DisabledItems: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item disabled>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
DisabledItems.args = {
  className: 'bg-base-100 w-56 shadow-xl rounded-box',
}

export const WithIcons: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Item 1
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Item 2
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Item 3
        </a>
      </Menu.Item>
    </Menu>
  )
}
WithIcons.args = {
  className: 'bg-base-100 w-56 shadow-xl p-2 rounded-box',
}

export const OnlyIcons: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
      </Menu.Item>
    </Menu>
  )
}
OnlyIcons.args = {
  className: 'bg-base-100 shadow-xl rounded-box',
}

export const IconsWithPadding: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
      </Menu.Item>
    </Menu>
  )
}
IconsWithPadding.args = {
  className: 'bg-base-100 shadow-xl p-2 rounded-box',
}

export const HorizontalWithSubmenu: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item tabIndex={0}>
        <span>Parent</span>
        <Menu className="bg-base-100">
          <Menu.Item>
            <a>Submenu 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Submenu 2</a>
          </Menu.Item>
          <Menu.Item>
            <a>Submenu 3</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
HorizontalWithSubmenu.args = {
  horizontal: true,
  className: 'bg-base-100 shadow-xl',
}
HorizontalWithSubmenu.parameters = {
  containerClassName: 'pb-40'
}

export const HorizontalWithSubmenuAndPaddingAndBorderRadius: Story<
  MenuProps
> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item tabIndex={0}>
        <span>Parent</span>
        <Menu className="bg-base-100">
          <Menu.Item>
            <a>Submenu 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Submenu 2</a>
          </Menu.Item>
          <Menu.Item>
            <a>Submenu 3</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
HorizontalWithSubmenuAndPaddingAndBorderRadius.args = {
  horizontal: true,
  className: 'bg-base-100 shadow-xl p-2 rounded-box',
}
HorizontalWithSubmenuAndPaddingAndBorderRadius.parameters = {
  containerClassName: 'pb-40'
}

export const ALotOfSubmenus: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item</a>
      </Menu.Item>
      <li tabIndex={0}>
        <span>Level 1</span>
        <ul className="rounded-box bg-base-100 p-2">
          <li>
            <span>Level 2</span>
            <ul>
              <li>
                <span>Level 3</span>
                <ul>
                  <li>
                    <span>Level 4</span>
                    <ul>
                      <li>
                        <span>Level 5</span>
                        <ul>
                          <li>
                            <a>Level 6</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </Menu>
  )
}
ALotOfSubmenus.args = {
  horizontal: true,
  className: 'bg-base-100 shadow-xl p-2 rounded-box',
}
ALotOfSubmenus.parameters = {
  containerClassName: 'pb-80'
}

export const WithCustomColor: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
WithCustomColor.args = {
  className: 'bg-secondary w-56 shadow-xl p-2 rounded-box text-secondary-content',
}
