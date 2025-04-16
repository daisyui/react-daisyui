import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize, ComponentVariant } from '../types'

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
    size?: ComponentSize
    border?: boolean
    variant?: Exclude<ComponentVariant, 'soft'> | 'border'
    imageFull?: boolean

    side?: ComponentSize | boolean
  }

interface ModifierMap {
  [key: string]: {
    [key: string]: string | undefined
  }
}

const DYNAMIC_MODIFIERS: ModifierMap = {
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
    { size, border = true, variant, imageFull, side, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'card',
      className,
      clsx({
        'card-xl': size === 'xl',
        'card-lg': size === 'lg',
        'card-md': size === 'md',
        'card-sm': size === 'sm',
        'card-xs': size === 'xs',
        'card-dash': variant === 'dash',
        'card-border': border || variant === 'outline' || variant == 'border',
        'image-full': imageFull,
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
