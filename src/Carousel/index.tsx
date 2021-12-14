import React, { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface CarouselProps extends IComponentBaseProps {
  children?: ReactElement<CarouselItemProps> | ReactElement<CarouselItemProps>[]
  snap?: 'start' | 'center' | 'end'
  vertical?: boolean
}

const Carousel = ({
  children,
  snap,
  vertical,
  dataTheme,
  className,
  style,
}: CarouselProps): JSX.Element => {
  const classes = clsx(
    'carousel',
    className,
    {
      [`carousel-${snap}`]: snap,
      'carousel-vertical': vertical,
    }
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

type CarouselItemProps = {
  children?: ReactNode | ReactNode[]
  src?: string
  index?: number
}

const CarouselItem = ({
  children,
  src,
  index,
}: CarouselItemProps): JSX.Element => {
  const classes = clsx(
    "carousel-item",
  )

  return (
    <div
      id={`item${index}`} 
      className={classes}
    >
      {src ? 
        (
          <img src={src}/>
        ) :
        (
          children
        )
      }
    </div>
  )
}

Carousel.Item = CarouselItem

export default Carousel
