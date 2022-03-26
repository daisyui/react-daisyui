import React, { forwardRef, ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '@/types'
import { getValidChildren } from '../utils'

import CarouselItem, { CarouselItemProps } from './CarouselItem'

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children?:
      | ReactElement<CarouselItemProps>
      | ReactElement<CarouselItemProps>[]
    snap?: 'start' | 'center' | 'end'
    vertical?: boolean
    indicatorButtons?: boolean
    indicatorButtonsClassName?: string
    rounded?: boolean
  }

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      snap,
      vertical,
      dataTheme,
      className,
      indicatorButtons,
      indicatorButtonsClassName,
      rounded,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'carousel',
      className,
      clsx({
        [`carousel-${snap}`]: snap,
        ['rounded-box']: rounded,
        'carousel-vertical': vertical,
      })
    )
    const indicatorButtonsClasses = clsx(
      'flex justify-center py-2 gap-2',
      indicatorButtonsClassName
    )

    const childrenArr = getValidChildren(children)

    return (
      <>
        <div
          role="listbox"
          aria-label="Image carousel"
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
        >
          {childrenArr.map(({ props }, index) => {
            return (
              <CarouselItem
                src={props.src}
                index={index}
                key={`itemKey${index}`}
              />
            )
          })}
        </div>
        {indicatorButtons && !vertical && (
          <div className={indicatorButtonsClasses}>
            {childrenArr.map((c, i) => {
              return (
                <a
                  href={`#item${i}`}
                  className="btn btn-xs"
                  key={`anchorKey${i}`}
                >
                  {i + 1}
                </a>
              )
            })}
          </div>
        )}
      </>
    )
  }
)

export default Object.assign(Carousel, { Item: CarouselItem })
