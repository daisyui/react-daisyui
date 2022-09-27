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
    rating: number
    onRatingChange?: (newRating: number) => void
  }

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    { children, size, half, hidden, dataTheme, className, rating, onRatingChange, ...props },
    ref
  ): JSX.Element => {
    const [ratingState, setRatingState] = useState(rating)
    const classes = twMerge(
      'rating',
      className,
      clsx({
        [`rating-${size}`]: size,
        'rating-half': half,
        'rating-hidden': hidden || ratingState === 0,
      })
    )

    const handleOnRatingChange = (newRating: number) => {
      if (newRating === ratingState) {
        return
      }
      setRatingState(newRating)
      onRatingChange?.(newRating)
    }

    useEffect(() => {
      setRatingState(rating)
    }, [rating])

    return (
      <div
        aria-label="Rating"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {ratingState === 0 && (
          <RatingItem
            className={clsx(classes, 'hidden')}
            checked
            readOnly
          />
        )}
        {React.Children.map(children, (child, index) => {
          const childComponent = child as ReactElement<RatingItemProps>
          return React.cloneElement(childComponent, {
            key: index + ratingState,
            checked: ratingState === index + 1,
            readOnly: onRatingChange == null,
            onChange: () => handleOnRatingChange(index + 1),
          })
        })}
      </div>
    )
  }
)

export default Object.assign(Rating, { Item: RatingItem })
