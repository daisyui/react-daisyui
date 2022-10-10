import React, {ReactElement, useEffect, useState} from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import RatingItem, { RatingItemProps } from './RatingItem'

export type RatingProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    size?: ComponentSize
    half?: boolean
    hidden?: boolean
    value: number
    onChange?: (newRating: number) => void
  }

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    { children, size, half, hidden, dataTheme, className, value, onChange, ...props },
    ref
  ): JSX.Element => {
    const [rating, setRating] = useState(value)
    const classes = twMerge(
      'rating',
      className,
      clsx({
        [`rating-${size}`]: size,
        'rating-half': half,
        'rating-hidden': hidden || rating === 0,
      })
    )

    const handleOnRatingChange = (newRating: number) => {
      if (newRating === rating) {
        return
      }
      setRating(newRating)
      onChange?.(newRating)
    }

    useEffect(() => {
      setRating(value)
    }, [value])

    return (
      <div
        aria-label="Rating"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {rating === 0 && (
          <RatingItem
            className={clsx(classes, 'hidden')}
            checked
            readOnly
          />
        )}
        {React.Children.map(children, (child, index) => {
          const childComponent = child as ReactElement<RatingItemProps>
          return React.cloneElement(childComponent, {
            key: index + rating,
            checked: rating === index + 1,
            readOnly: onChange == null,
            onChange: () => handleOnRatingChange(index + 1),
          })
        })}
      </div>
    )
  }
)

export default Object.assign(Rating, { Item: RatingItem })
