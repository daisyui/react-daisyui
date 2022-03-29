import React, { LegacyRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import Button from '../Button'

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly innerRef?: LegacyRef<HTMLDivElement>
  src?: string
  alt?: string
  index?: number
  buttons?: boolean
  fullWidth?: boolean
  onPrev?: () => void
  onNext?: () => void
}

const CarouselItem = ({
  children,
  innerRef,
  src,
  alt,
  index = 0,
  buttons,
  fullWidth,
  onPrev,
  onNext,
  className,
  ...props
}: CarouselItemProps): JSX.Element => {
  const classes = twMerge(
    "carousel-item relative",
    className
  )

  const imageClasses = clsx({
    'w-full': fullWidth
  })

  return (
    <div {...props} id={`item${index}`} ref={innerRef} className={classes}>
      {src ? <img src={src} alt={alt} className={imageClasses} /> : children}
      {buttons && (
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {/* TODO: pass in customizable prev/next buttons */}
          <Button onClick={onPrev} shape="circle">❮</Button>
          <Button onClick={onNext} shape="circle">❯</Button>
        </div>
      )}
    </div>
  )
}

export default CarouselItem
