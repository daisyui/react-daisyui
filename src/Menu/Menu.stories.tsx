import React, { useState, useCallback } from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from '.'
import Tooltip from '../Tooltip'
import Badge from '../Badge'

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
Default.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const Responsive: Story<MenuProps> = (args) => {
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
Responsive.args = {
  className: 'bg-base-200 rounded-box',
  responsive: true,
}

export const IconOnly: Story<MenuProps> = (args) => {
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
              strokeWidth="2"
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
              strokeWidth="2"
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
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
      </Menu.Item>
    </Menu>
  )
}
IconOnly.args = {
  className: 'bg-base-200 rounded-box',
}

export const IconOnlyHorizontal: Story<MenuProps> = (args) => {
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
              strokeWidth="2"
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
              strokeWidth="2"
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
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </a>
      </Menu.Item>
    </Menu>
  )
}
IconOnlyHorizontal.args = {
  className: 'bg-base-200 rounded-box',
  horizontal: true,
}

export const IconOnlyWithTooltip: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <Tooltip message="Home" position="right">
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
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
      <Menu.Item>
        <Tooltip message="Details" position="right">
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
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
      <Menu.Item>
        <Tooltip message="Stats" position="right">
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
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
    </Menu>
  )
}
IconOnlyWithTooltip.args = {
  className: 'bg-base-200 rounded-box',
}

export const IconOnlyHorizontalWithTooltip: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <Tooltip message="Home">
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
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
      <Menu.Item>
        <Tooltip message="Details">
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
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
      <Menu.Item>
        <Tooltip message="Stats">
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
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </Tooltip>
      </Menu.Item>
    </Menu>
  )
}
IconOnlyHorizontalWithTooltip.args = {
  className: 'bg-base-200 rounded-box mt-6',
  horizontal: true,
}

export const Sizes: Story<MenuProps> = (args) => {
  return (
    <div className="flex flex-col gap-4">
      <Menu {...args} size="xs">
        <Menu.Item>
          <a>xs item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a>xs item 1</a>
        </Menu.Item>
      </Menu>
      <Menu {...args} size="sm">
        <Menu.Item>
          <a>sm item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a>sm item 1</a>
        </Menu.Item>
      </Menu>
      <Menu {...args} size="md">
        <Menu.Item>
          <a>md item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a>md item 1</a>
        </Menu.Item>
      </Menu>
      <Menu {...args} size="lg">
        <Menu.Item>
          <a>lg item 1</a>
        </Menu.Item>
        <Menu.Item>
          <a>lg item 1</a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
Sizes.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const DisabledItems: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Enabled item 1</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>disabled item</a>
      </Menu.Item>
      <Menu.Item disabled>
        <a>disabled item</a>
      </Menu.Item>
    </Menu>
  )
}
DisabledItems.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const Icons: Story<MenuProps> = (args) => {
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
Icons.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const IconsAndBadgeResponsive: Story<MenuProps> = (args) => {
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
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Inbox
          <Badge size="sm">99+</Badge>
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
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Updates
          <Badge color="warning" size="sm">
            NEW
          </Badge>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
          Stats
          <Badge color="info" size="xs" />
        </a>
      </Menu.Item>
    </Menu>
  )
}
IconsAndBadgeResponsive.args = {
  className: 'bg-base-200 rounded-box',
  responsive: true,
}

export const WithoutPaddingAndBorderRadius: Story<MenuProps> = (args) => {
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
WithoutPaddingAndBorderRadius.args = {
  className: 'bg-base-200 w-56 p-0 [&_li>*]:rounded-none',
}

export const Title: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Title>Title</Menu.Title>
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
Title.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const TitleAsParent: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <Menu.Title>Title</Menu.Title>
        <Menu>
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
      </Menu.Item>
    </Menu>
  )
}
TitleAsParent.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const Submenu: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Parent</a>
        <Menu>
          <Menu.Item>
            <a>level 2 item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>level 2 item 2</a>
          </Menu.Item>
          <Menu.Item>
            <a>Parent</a>
            <Menu>
              <Menu.Item>
                <a>level 3 item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>level 3 item 2</a>
              </Menu.Item>
            </Menu>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
Submenu.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const CollapsibleSubmenu: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <Menu.Details open={true} label={'Parent'}>
          <Menu.Item>
            <a>level 2 item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>level 2 item 2</a>
          </Menu.Item>
          <Menu.Item>
            <Menu.Details open={true} label={'Parent'}>
              <Menu.Item>
                <a>level 3 item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>level 3 item 2</a>
              </Menu.Item>
            </Menu.Details>
          </Menu.Item>
        </Menu.Details>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}
CollapsibleSubmenu.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const CollapsibleSubmenuWithMenuDropdown: Story<MenuProps> = (args) => {
  const [open, setOpen] = useState(true)

  const toggleOpen = useCallback(() => {
    setOpen((val) => !val)
  }, [setOpen])
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <Menu.Dropdown label="Parent" onClick={toggleOpen} open={open}>
          <Menu.Item>
            <a>level 2 item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>level 2 item 2</a>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu.Item>
    </Menu>
  )
}
CollapsibleSubmenuWithMenuDropdown.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const FileTree: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          resume.pdf
        </a>
      </Menu.Item>
      <Menu.Item>
        <Menu.Details
          open={true}
          label={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              My Files
            </>
          }
        >
          <Menu.Item>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Project-final.psd
            </a>
          </Menu.Item>
          <Menu.Item>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Project-final-2.psd
            </a>
          </Menu.Item>
          <Menu.Item>
            <Menu.Details
              open={true}
              label={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  Images
                </>
              }
            >
              <Menu.Item>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Screenshot1.png
                </a>
              </Menu.Item>
              <Menu.Item>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  Screenshot2.png
                </a>
              </Menu.Item>
              <Menu.Item>
                <Menu.Details
                  open={true}
                  label={
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                        />
                      </svg>
                      Others
                    </>
                  }
                >
                  <Menu.Item>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      Screenshot3.png
                    </a>
                  </Menu.Item>
                </Menu.Details>
              </Menu.Item>
            </Menu.Details>
          </Menu.Item>
        </Menu.Details>
      </Menu.Item>
      <Menu.Item>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          reports-final-2.pdf
        </a>
      </Menu.Item>
    </Menu>
  )
}
FileTree.args = {
  className: 'bg-base-200 w-56 rounded-lg max-w-xs w-full',
  size: 'xs',
}

export const ActiveItem: Story<MenuProps> = (args) => {
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

ActiveItem.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const FocusItem: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a className="focus">Item 2</a>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}

FocusItem.args = {
  className: 'bg-base-200 w-56 rounded-box',
}

export const Horizontal: Story<MenuProps> = (args) => {
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

Horizontal.args = {
  className: 'bg-base-200 rounded-box',
  horizontal: true,
}

export const HorizontalSubmenu: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <a>Parent</a>
        <Menu>
          <Menu.Item>
            <a>level2 Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>level2 Item 2</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Item 3</a>
      </Menu.Item>
    </Menu>
  )
}

HorizontalSubmenu.args = {
  className: 'bg-base-200 rounded-box',
  horizontal: true,
}

export const MegaMenuWithSubmenuResponsive: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Solutions</a>
        <Menu>
          <Menu.Item>
            <a>Design</a>
          </Menu.Item>
          <Menu.Item>
            <a>Development</a>
          </Menu.Item>
          <Menu.Item>
            <a>Hosting</a>
          </Menu.Item>
          <Menu.Item>
            <a>Domain register</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Enterprise</a>
        <Menu>
          <Menu.Item>
            <a>CRM software</a>
          </Menu.Item>
          <Menu.Item>
            <a>Marketing management</a>
          </Menu.Item>
          <Menu.Item>
            <a>Security</a>
          </Menu.Item>
          <Menu.Item>
            <a>Consulting</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Products</a>
        <Menu>
          <Menu.Item>
            <a>UI Kit</a>
          </Menu.Item>
          <Menu.Item>
            <a>Wordpress themes</a>
          </Menu.Item>
          <Menu.Item>
            <a>Wordpress plugins</a>
          </Menu.Item>
          <Menu.Item>
            <a>Open source</a>
            <Menu>
              <Menu.Item>
                <a>Auth management system</a>
              </Menu.Item>
              <Menu.Item>
                <a>VScode theme</a>
              </Menu.Item>
              <Menu.Item>
                <a>Color picker app</a>
              </Menu.Item>
            </Menu>
          </Menu.Item>
        </Menu>
      </Menu.Item>
      <Menu.Item>
        <a>Company</a>
        <Menu>
          <Menu.Item>
            <a>About us</a>
          </Menu.Item>
          <Menu.Item>
            <a>Contact us</a>
          </Menu.Item>
          <Menu.Item>
            <a>Privacy policy</a>
          </Menu.Item>
          <Menu.Item>
            <a>Press kit</a>
          </Menu.Item>
        </Menu>
      </Menu.Item>
    </Menu>
  )
}

MegaMenuWithSubmenuResponsive.args = {
  className: 'bg-base-200 rounded-box lg:min-w-max ',
  responsive: true,
}

export const CollapsibleWithSubmenuResponsive: Story<MenuProps> = (args) => {
  return (
    <Menu {...args}>
      <Menu.Item>
        <a>Item 1</a>
      </Menu.Item>
      <Menu.Item>
        <Menu.Details open={true} label={'Parent item'}>
          <Menu.Item>
            <a>level 2 item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>level 2 item 2</a>
          </Menu.Item>
          <Menu.Item>
            <Menu.Details open={true} label={'Parent'}>
              <Menu.Item>
                <a>item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>item 2</a>
              </Menu.Item>
            </Menu.Details>
          </Menu.Item>
        </Menu.Details>
      </Menu.Item>
      <li>
        <a>Item 3</a>
      </li>
    </Menu>
  )
}

CollapsibleWithSubmenuResponsive.args = {
  className: 'bg-base-200 rounded-box lg:mb-64',
  responsive: true,
}
