import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import RatingItem from './RatingItem'

export type RatingProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    size?: ComponentSize
    half?: boolean
    hidden?: boolean
  }

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    { children, size, half, hidden, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
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
        aria-label="Rating"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {children}
      </div>
    )
  }
)

export default Object.assign(Rating, { Item: RatingItem })
