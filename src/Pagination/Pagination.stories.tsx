import React from 'react'
import { Story, Meta } from '@storybook/react'

import Pagination, { PaginationProps } from '.'
import Button from '../Button'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as Meta

export const Default: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args}>
      <Button>1</Button>
      <Button active>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </Pagination>
  )
}

Default.args = {}
