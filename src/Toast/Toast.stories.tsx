import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Toast, { ToastProps } from '.'
import Alert from '../Alert'
import Button from '../Button'

export default {
  title: 'Layout/Toast',
  component: Toast,
} as Meta

const horizontalMapping = {
  start: 'left',
  end: 'right',
  center: 'center',
} as const

export const Default: Story<ToastProps> = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <div className="w-full h-full">
        <Toast {...args} vertical={vertical} horizontal={horizontal}>
          Default toast
        </Toast>
      </div>
    </>
  )
}

export const WithAlert: Story<ToastProps> = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
      </Toast>
    </>
  )
}

export const WithMultipleAlerts: Story<ToastProps> = ({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return (
    <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
        <Alert status="success">Message sent successfully.</Alert>
      </Toast>
    </>
  )
}

const dynamicToastChildStatuses = [
  'info',
  'success',
  'warning',
  'error',
] as const

type DynamicToastChild = {
  text: string
  status: typeof dynamicToastChildStatuses[number]
}

export const DynamicAlerts: Story<ToastProps> = (args) => {
  const [alerts, setAlerts] = React.useState<DynamicToastChild[]>([
    { text: 'This is a custom alert!', status: 'info' },
  ])

  const handleAddToast = () => {
    setAlerts((alerts) => [
      ...alerts,
      {
        text: 'New message arrived.',
        status:
          dynamicToastChildStatuses[
            Math.floor(Math.random() * dynamicToastChildStatuses.length)
          ],
      },
    ])
  }

  const handleRemoveToast = (index: number) => {
    setAlerts((alerts) => alerts.filter((_, i) => i !== index))
  }

  return (
    <div>
      <Button onClick={handleAddToast}>Add Toast</Button>
      <Toast {...args}>
        {alerts.map((alert, index) => (
          <Alert key={index} status={alert.status}>
            <div className="w-full flex-row justify-between gap-2">
              <h3>{alert.text}</h3>
            </div>
            <Button color="ghost" onClick={() => handleRemoveToast(index)}>
              X
            </Button>
          </Alert>
        ))}
      </Toast>
    </div>
  )
}
