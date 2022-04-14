import React from 'react'
import { Story, Meta } from '@storybook/react'

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
Default.args = {}
