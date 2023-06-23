import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Dropdown, { DropdownProps } from '.'
import Card from '../Card/'
import Navbar from '../Navbar'
import Button from '../Button'

export default {
  title: 'Actions/Dropdown',
  component: Dropdown,
  argTypes: {
    item: {
      control: false,
    },
  },
} as Meta

export const Default: Story<DropdownProps> = (args) => {
  return (
    <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export const AsCard: Story<DropdownProps> = (args) => {
  return (
    <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1">
          <Card.Body>
            <Card.Title tag={'h3'}>Card title!</Card.Title>
            <p>you can use any element as a dropdown.</p>
          </Card.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export const InNavbar: Story<DropdownProps> = ({ dataTheme, ...args }) => {
  return (
    <Navbar
      className="my-32 px-2 font-sans bg-base-300 rounded-box"
      dataTheme={dataTheme}
    >
      <Navbar.Start className="px-2 lg:flex-none">
        <span className="text-lg font-bold">daisyUI</span>
      </Navbar.Start>
      <Navbar.End>
        <Button color="ghost" dataTheme={dataTheme}>
          Button
        </Button>
        <Dropdown {...args} dataTheme={dataTheme}>
          <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-52 mt-4">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>
    </Navbar>
  )
}
InNavbar.args = {
  end: true,
}

export const Helper: Story<DropdownProps> = (args) => {
  return (
    <div className="my-32 font-sans">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Dropdown.Toggle
          button={false}
          className="btn btn-circle btn-ghost btn-xs text-info"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
          <Card.Body>
            <Card.Title tag={'h2'}>You needed more info?</Card.Title>
            <p>Here is a description!</p>
          </Card.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
Helper.args = { end: true }
