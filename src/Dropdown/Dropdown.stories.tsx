import React from 'react'
import { Story, Meta } from '@storybook/react'

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
    <Navbar className="my-32 px-2 font-sans" color="dark" dataTheme={dataTheme}>
      <Navbar.Start>
        <span className="text-lg font-bold">daisyUI</span>
      </Navbar.Start>
      <Navbar.End>
        <Button color="ghost" dataTheme={dataTheme}>
          Button
        </Button>
        <Dropdown {...args} dataTheme={dataTheme}>
          <Dropdown.Toggle color="ghost">Dropdown</Dropdown.Toggle>
          <Dropdown.Menu className="w-52">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>
    </Navbar>
  )
}

export const Helper: Story<DropdownProps> = (args) => {
  return (
    <div className="my-32 font-sans">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Button shape="circle" className="text-info" color="ghost" size="xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </Button>
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
