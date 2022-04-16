import React, { cloneElement, LegacyRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import Button from '../Button'

export type CarouselItemWidth = 'full' | 'half'

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly innerRef?: LegacyRef<HTMLDivElement>
  src?: string
  alt?: string
  index?: number
  width?: CarouselItemWidth
  hasButtons?: boolean
  buttonStyle?: (value: string) => React.ReactElement
  onPrev?: () => void
  onNext?: () => void
}

const CarouselItem = ({
  children,
  innerRef,
  src,
  alt,
  index = 0,
  width,
  hasButtons,
  buttonStyle,
  onPrev,
  onNext,
  className,
  ...props
}: CarouselItemProps): JSX.Element => {
  const classes = twMerge(
    'carousel-item relative',
    className,
    clsx({
      'w-full': width === 'full',
      'w-1/2': width === 'half',
      'h-full': true,
    })
  )

  const imageClasses = clsx({
    'w-full': width === 'full',
  })

  const renderButtons = () => {
    if (buttonStyle != null) {
      return (
        <>
          {cloneElement(buttonStyle('❮'), {
            onClick: onPrev,
          })}
          {cloneElement(buttonStyle('❯'), {
            onClick: onNext,
          })}
        </>
      )
    }

    return (
      <>
        <Button onClick={onPrev} shape="circle">
          ❮
        </Button>
        <Button onClick={onNext} shape="circle">
          ❯
        </Button>
      </>
    )
  }

  return (
    <div {...props} id={`item${index}`} ref={innerRef} className={classes}>
      {src ? <img src={src} alt={alt} className={imageClasses} /> : children}
      {hasButtons && (
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          {renderButtons()}
        </div>
      )}
    </div>
  )
}

export default CarouselItem
