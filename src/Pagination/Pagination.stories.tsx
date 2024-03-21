import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Pagination, { PaginationProps } from '.'
import Button from '../Button'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} as Meta

export const Default: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args} onPageChange={(currentPage: number) => console.log(currentPage)} />
  )
}

Default.args = { totalCount: 101 }

export const Sizes: Story<PaginationProps> = (args) => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination {...args} size='xs' />
      <Pagination {...args} size='sm' />
      <Pagination {...args} size='md' />
      <Pagination {...args} size='lg' />
    </div>
  )
}

Sizes.args = { totalCount: 101 }

export const ShowTotal: Story<PaginationProps> = (args) => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination {...args} showTotal={(total: number) => `Total ${total} items`} />
      <Pagination {...args} showTotal={(total: number, range: number[]) => `${range[0]}-${range[1]} of ${total} items`} />
    </div>
  )
}

ShowTotal.args = { totalCount: 101 }


export const ExtraSmallButtons: Story<PaginationProps> = (args) => {
  return (
    <div className='flex flex-col gap-4'>
      <Pagination {...args} simple />
      <Pagination {...args} simple={(currentPage: number) => `page ${currentPage}`} />
    </div>
  )
}

ExtraSmallButtons.args = { totalCount: 101, previousLabel: "«", nextLabel: "»" }

export const NextPrevOutlineButtonsWithEqualWidth: Story<PaginationProps> = (
  args
) => {
  return (
    <Pagination {...args} />
  )
}

NextPrevOutlineButtonsWithEqualWidth.args = { totalCount: 101, previousLabel: "previous", nextLabel: "next", simple: true, variant: 'outline', className: 'grid grid-cols-2' }
