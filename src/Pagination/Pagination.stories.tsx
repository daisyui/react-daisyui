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
    <Pagination {...args}>
      <Button className="join-item">1</Button>
      <Button className="join-item" active>
        2
      </Button>
      <Button className="join-item">3</Button>
      <Button className="join-item">4</Button>
    </Pagination>
  )
}

Default.args = {}

export const Sizes: Story<PaginationProps> = (args) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Pagination {...args}>
        <Button size="xs" className="join-item">
          1
        </Button>
        <Button size="xs" className="join-item" active>
          2
        </Button>
        <Button size="xs" className="join-item">
          3
        </Button>
        <Button size="xs" className="join-item">
          4
        </Button>
      </Pagination>

      <Pagination {...args}>
        <Button size="sm" className="join-item">
          1
        </Button>
        <Button size="sm" className="join-item" active>
          2
        </Button>
        <Button size="sm" className="join-item">
          3
        </Button>
        <Button size="sm" className="join-item">
          4
        </Button>
      </Pagination>

      <Pagination {...args}>
        <Button size="md" className="join-item">
          1
        </Button>
        <Button size="md" className="join-item" active>
          2
        </Button>
        <Button size="md" className="join-item">
          3
        </Button>
        <Button size="md" className="join-item">
          4
        </Button>
      </Pagination>

      <Pagination {...args}>
        <Button size="lg" className="join-item">
          1
        </Button>
        <Button size="lg" className="join-item" active>
          2
        </Button>
        <Button size="lg" className="join-item">
          3
        </Button>
        <Button size="lg" className="join-item">
          4
        </Button>
      </Pagination>
    </div>
  )
}

Sizes.args = {}

export const DisabledButton: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args}>
      <Button className="join-item">1</Button>
      <Button className="join-item">2</Button>
      <Button className="join-item" disabled>
        ...
      </Button>
      <Button className="join-item">99</Button>
      <Button className="join-item">100</Button>
    </Pagination>
  )
}

DisabledButton.args = {}

export const ExtraSmallButtons: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args}>
      <Button className="join-item">«</Button>
      <Button className="join-item">Page 22</Button>
      <Button className="join-item">»</Button>
    </Pagination>
  )
}

ExtraSmallButtons.args = {}

export const NextPrevOutlineButtonsWithEqualWidth: Story<PaginationProps> = (
  args
) => {
  return (
    <Pagination {...args}>
      <Button variant="outline" className="join-item">
        Previous page
      </Button>
      <Button variant="outline" className="join-item">
        Next
      </Button>
    </Pagination>
  )
}

NextPrevOutlineButtonsWithEqualWidth.args = {
  className: 'grid grid-cols-2',
}

export const UsingRadioInputs: Story<PaginationProps> = (args) => {
  return (
    <Pagination {...args}>
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="1"
        defaultChecked={true}
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="2"
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="4"
      />
    </Pagination>
  )
}

UsingRadioInputs.args = {}
