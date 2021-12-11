import React from 'react'
import { Story, Meta } from '@storybook/react'

import Breadcrumbs, { BreadcrumbsProps } from '.'

const { Item } = Breadcrumbs

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta

export const Default: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <Item href="/">Home</Item>
      <Item href="/">Documents</Item>
      <Item href="/">Add Document</Item>
    </Breadcrumbs>
  )
}
Default.args = {}
