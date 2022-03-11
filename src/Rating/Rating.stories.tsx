import React from 'react'
import { Story, Meta } from '@storybook/react'

import Rating, { RatingProps } from '.'

export default {
  title: `Data Input/Rating`,
  component: Rating,
} as Meta

export const Default: Story<RatingProps> = (args) => {
  return (
    <Rating {...args}>
      <Rating.Item name="rating-1" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <Rating.Item name="rating-1" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-1" className="mask mask-star-2 bg-orange-400" />
    </Rating>
  )
}

Default.args = {}
