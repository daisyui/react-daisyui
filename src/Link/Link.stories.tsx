import React from 'react'
import { Story, Meta } from '@storybook/react'

import Link, { LinkProps } from '.'

export default {
  title: 'Navigation/Link',
  component: Link,
} as Meta

export const Default: Story<LinkProps> = (args) => {
  return (
    <Link {...args}>
      It's just a simple link
    </Link>
  )
}
Default.args = {}