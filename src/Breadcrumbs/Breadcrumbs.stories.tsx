import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Breadcrumbs, { BreadcrumbsProps } from '.'

const { Item } = Breadcrumbs

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as Meta

export const Default: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Documents</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Add Document</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const WithIcons: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        Documents
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Add Document
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const WithMaxWidth: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

WithMaxWidth.args = {
  className: 'max-w-xs ',
}
