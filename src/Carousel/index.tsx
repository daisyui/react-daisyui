import React, { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

export type CarouselProps = {
  children?: ReactElement<CarouselItemProps> | ReactElement<CarouselItemProps>[]
  snap?: 'start' | 'center' | 'end'
  vertical?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Carousel = ({
  children,
  snap,
  vertical,
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
    <>
      <div
        className={classes}
        style={style}
      >
        {children}
      </div>
    </>
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
