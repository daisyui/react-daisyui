import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Alert, { AlertProps } from '.'
import Button from '../Button'

export default {
  title: 'Data Display/Alert',
  component: Alert,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta

export const Default: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      <span>12 unread messages. Tap to see.</span>
    </Alert>
  )
}
Default.args = {}

export const InfoColor: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      <span>New software update available.</span>
    </Alert>
  )
}
InfoColor.args = {
  status: 'info',
}

export const SuccessColor: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      <span>Your purchase has been confirmed!</span>
    </Alert>
  )
}
SuccessColor.args = {
  status: 'success',
}

export const WarningColor: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      }
    >
      <span>Warning: Invalid email address!</span>
    </Alert>
  )
}
WarningColor.args = {
  status: 'warning',
}

export const ErrorColor: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      <span>Error! Task failed successfully.</span>
    </Alert>
  )
}
ErrorColor.args = {
  status: 'error',
}

export const WithButtons: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      <span>we use cookies for no reason.</span>
      <div className="space-x-1">
        <Button size="sm">Deny</Button>
        <Button size="sm" color="primary">
          Accept
        </Button>
      </div>
    </Alert>
  )
}
WithButtons.args = {
  className: 'shadow-lg',
}

export const WithTitleAndDescription: Story<AlertProps> = (args) => {
  return (
    <Alert
      {...args}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      }
    >
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-xs">You have 1 unread message</div>
      </div>
      <Button size="sm">See</Button>
    </Alert>
  )
}
WithTitleAndDescription.args = {
  className: 'shadow-lg',
}
