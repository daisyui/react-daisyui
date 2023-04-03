import React, {useEffect, useState} from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Rating, { RatingProps } from '.'

export default {
  title: 'Data Input/Rating',
  component: Rating,
} as Meta

export const Default: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
    </Rating>
  )
}
Default.args = {
  value: 2,
}

export const MaskStart2WithWarningColor: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </Rating>
  )
}
MaskStart2WithWarningColor.args = {
  value: 2,
}

export const MaskHeartWithMultipleColors: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-orange-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-yellow-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-lime-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-green-400" />
    </Rating>
  )
}
MaskHeartWithMultipleColors.args = {
  value: 2,
}

export const MaskStart2WithGreen500Color: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
    </Rating>
  )
}
MaskStart2WithGreen500Color.args = {
  value: 2,
}

export const RatingHidden: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
    </Rating>
  )
}
RatingHidden.args = {
  size: 'lg',
  value: 0,
}

export const HalfStars: Story<RatingProps> = ({value, onChange, ...args}) => {
  const [rating, setRating] = useState(value)

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />

      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-1 bg-green-500"
      />
      <Rating.Item
        name="rating-10"
        className="mask mask-star-2 mask-half-2 bg-green-500"
      />
    </Rating>
  )
}
HalfStars.args = {
  size: 'lg',
  half: true,
  value: 3,
}
