import React, { LegacyRef, ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import CarouselItem, { CarouselItemProps } from './CarouselItem'

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children?:
      | ReactElement<CarouselItemProps>
      | ReactElement<CarouselItemProps>[]
    ref?: LegacyRef<HTMLDivElement>
    snap?: 'start' | 'center' | 'end'
    vertical?: boolean
  }

const Carousel = ({
  children,
  ref,
  snap,
  vertical,
  dataTheme,
  className,
  ...props
}: CarouselProps): JSX.Element => {
  const classes = twMerge(
    'carousel',
    className,
    clsx({
      [`carousel-${snap}`]: snap,
      'carousel-vertical': vertical,
    })
  )

  return (
    <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

Carousel.Item = CarouselItem

export default Carousel
