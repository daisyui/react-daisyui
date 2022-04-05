import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import CardActions, { CardActionsProps as ActionProps } from './CardActions'
import CardBody, { CardBodyProps as BodyProps } from './CardBody'
import CardTitle, { CardTitleProps as TitleProps } from './CardTitle'
import CardImage, { CardImageProps as ImageProps } from './CardImage'

export type CardActionsProps = ActionProps
export type CardBodyProps = BodyProps
export type CardTitleProps = TitleProps
export type CardImageProps = ImageProps

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    bordered?: boolean
    imageFull?: boolean

    // responsive props
    normal?: ComponentSize | boolean // Applies default paddings
    compact?: ComponentSize | boolean // Applies smaller padding
    side?: ComponentSize | boolean // The image in <figure> will be on to the side
  }

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined
  }
}

const DYNAMIC_MODIFIERS: ModifierMap = {
  compact: {
    true: 'card-compact',
    xs: 'xs:card-compact',
    sm: 'sm:card-compact',
    md: 'md:card-compact',
    lg: 'lg:card-compact',
  },
  normal: {
    true: 'card-normal',
    xs: 'xs:card-normal',
    sm: 'sm:card-normal',
    md: 'md:card-normal',
    lg: 'lg:card-normal',
  },
  side: {
    true: 'card-side',
    xs: 'xs:card-side',
    sm: 'sm:card-side',
    md: 'md:card-side',
    lg: 'lg:card-side',
  },
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { bordered = true, imageFull, normal, compact, side, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'card',
      className,
      clsx({
        'card-bordered': bordered,
        'image-full': imageFull,
        [(compact && DYNAMIC_MODIFIERS.compact[compact.toString()]) || '']:
          compact,
        [(normal && DYNAMIC_MODIFIERS.normal[normal.toString()]) || '']: normal,
        [(side && DYNAMIC_MODIFIERS.side[side.toString()]) || '']: side,
      })
    )

    return <div aria-label="Card" {...props} className={classes} ref={ref} />
  }
)

export default Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
})
