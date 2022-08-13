import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Story, Meta } from '@storybook/react'

import BottomNavigation, { BottomNavigationProps } from '.'

const { Label } = BottomNavigation

const meta: Meta = {
  title: `Navigation/BottomNavigation`,
  component: BottomNavigation,
  parameters: {
    controls: { expanded: true },
  },
}
const Home = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => (
  <button className={className}>
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
    {children}
  </button>
)
const Warnings = ({
  className,
  children,
}: {
  className?: string

  children?: ReactNode
}) => (
  <button className={clsx('active', className)}>
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
    {children}
  </button>
)
const Statics = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => (
  <button className={className}>
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
    {children}
  </button>
)

export default meta

const Template: Story = ({ children, ...rest }) => (
  <BottomNavigation {...rest}>{children}</BottomNavigation>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Home />
      <Warnings />
      <Statics />
    </>
  ),
}

export const BottomNavigationWithBrandColors: Story<BottomNavigationProps> = (
  args
) => {
  return (
    <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} className="relative">
        <Home className="text-primary" />
        <Warnings className="text-primary" />
        <Statics className="text-primary" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-secondary" />
        <Warnings className="text-secondary" />
        <Statics className="text-secondary" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-accent" />
        <Warnings className="text-accent" />
        <Statics className="text-accent" />
      </BottomNavigation>
    </div>
  )
}

export const BottomNavigationWithStateColors: Story<BottomNavigationProps> = (
  args
) => {
  return (
    <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} className="relative">
        <Home className="text-info" />
        <Warnings className="text-info" />
        <Statics className="text-info" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-success" />
        <Warnings className="text-success" />
        <Statics className="text-success" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-warning" />
        <Warnings className="text-warning" />
        <Statics className="text-warning" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-error" />
        <Warnings className="text-error" />
        <Statics className="text-error" />
      </BottomNavigation>
    </div>
  )
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  children: (
    <>
      <Home>
        <Label>Home</Label>
      </Home>
      <Warnings>
        <Label>Warnings</Label>
      </Warnings>
      <Statics>
        <Label>Statics</Label>
      </Statics>
    </>
  ),
}

export const WithCustomColor = Template.bind({})
WithCustomColor.args = {
  children: (
    <>
      <Home className="bg-pink-200 text-pink-600">
        <Label>Home</Label>
      </Home>
      <Warnings className="bg-blue-200 text-blue-600">
        <Label>Warnings</Label>
      </Warnings>
      <Statics className="bg-teal-200 text-teal-600">
        <Label>Statics</Label>
      </Statics>
    </>
  ),
}

export const Sizes: Story<BottomNavigationProps> = (args) => {
  return (
    <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} size="xs" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="sm" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="md" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="lg" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
    </div>
  )
}
