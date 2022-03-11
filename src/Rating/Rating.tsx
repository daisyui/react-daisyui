import React, { LegacyRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentSize,
} from '../types'

import RatingItem from './RatingItem'

export type RatingProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    ref?: LegacyRef<HTMLDivElement>
    size?: ComponentSize
    half?: boolean
    hidden?: boolean
}

const Rating = ({
  children,
  ref,
  size,
  half,
  hidden,
  dataTheme,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const classes = twMerge(
    'rating',
    className,
    clsx({
      [`rating-${size}`]: size,
      'rating-half': half,
      'rating-hidden': hidden,
    })
  )

  return (
    <div
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      {children}
    </div>
  )
}

Rating.Item = RatingItem

export default Rating
