import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '@/types'

type ButtonBaseProps = IComponentBaseProps & {
  shape?: ComponentShape
  size?: ComponentSize
  variant?: 'outline' | 'link'
  color?: ComponentColor
  fullWidth?: boolean
  responsive?: boolean
  animation?: boolean
  loading?: boolean
  active?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  disabled?: boolean
}

type ButtonElProps = Omit<
  JSX.IntrinsicElements['button'],
  'ref' | keyof ButtonBaseProps
> &
  ButtonBaseProps & {
    href?: undefined
    ref?: React.MutableRefObject<Partial<HTMLButtonElement>>
  }

type AnchorProps = Omit<
  JSX.IntrinsicElements['a'],
  'ref' | keyof ButtonBaseProps
> &
  ButtonBaseProps & {
    href: string
    ref?: React.MutableRefObject<Partial<HTMLAnchorElement>>
  }

export type ButtonProps = ButtonElProps | AnchorProps

type PolymorphicButton = {
  (props: AnchorProps): JSX.Element
  (props: ButtonProps): JSX.Element
}

const isAnchor = (props: ButtonProps): props is AnchorProps => {
  return props.href != undefined
}

const makeButtonClasses = (props: ButtonProps) => {
  return twMerge(
    'btn',
    props.className,
    clsx(((props.startIcon && !props.loading) || props.endIcon) && 'gap-2', {
      [`btn-${props.size}`]: props.size,
      [`btn-${props.shape}`]: props.shape,
      [`btn-${props.color}`]: props.color,
      'btn-block': props.fullWidth,
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': props.responsive,
      'no-animation': !props.animation,
      [`btn-${props.variant}`]: props.variant,
      'btn-active': props.active,
      loading: props.loading,
      'btn-disabled': props.disabled,
    })
  )
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    startIcon,
    endIcon,
    children,
    dataTheme,
    loading,
    active,
    shape,
    size,
    variant,
    color,
    fullWidth,
    responsive,
    animation,
    ...rest
  } = props

  const classes = makeButtonClasses(props)

  if (isAnchor(props)) {
    return (
      <a
        {...(rest as Partial<AnchorProps>)}
        className={classes}
        data-theme={dataTheme}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      >
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </a>
    )
  } else {
    return (
      <button
        {...(rest as Partial<ButtonElProps>)}
        className={classes}
        data-theme={dataTheme}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    )
  }
}) as PolymorphicButton

export default Object.assign(Button, { displayName: 'Button' })
