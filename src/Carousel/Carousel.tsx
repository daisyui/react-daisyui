import React, { forwardRef, ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '@/types'

import CarouselItem, { CarouselItemProps } from './CarouselItem'

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children?:
      | ReactElement<CarouselItemProps>
      | ReactElement<CarouselItemProps>[]
    snap?: 'start' | 'center' | 'end'
    vertical?: boolean
  }

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    { children, snap, vertical, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'carousel',
      className,
      clsx({
        [`carousel-${snap}`]: snap,
        'carousel-vertical': vertical,
      })
    )

    return (
      <div
        role="listbox"
        aria-label="Image carousel"
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

export default Object.assign(Carousel, { Item: CarouselItem })
