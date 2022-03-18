import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

/* 
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

// Allow for proper typing when button is rendered as an anchor tag or a button tag

type ButtonElProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never
  }

type AnchorElProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonElProps | AnchorElProps

type PolymorphicButton = {
  (props: AnchorElProps): JSX.Element
  (props: ButtonElProps): JSX.Element
}

*/

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  IComponentBaseProps & {
    href?: string
    target?: HTMLAnchorElement['target']
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
  }

const isAnchor = (props: ButtonProps) => {
  //: props is AnchorElProps => {
  return props.href != undefined
}

const makeClassName = (props: ButtonProps) => {
  const {
    variant,
    className,
    startIcon,
    loading,
    endIcon,
    size,
    shape,
    color,
    fullWidth,
    responsive,
    animation,
    active,
    disabled,
  } = props

  return twMerge(
    'btn',
    className,
    clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      [`btn-${color}`]: color,
      'btn-block': fullWidth,
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
      'no-animation': !animation,
      'btn-active': active && !disabled, // !disabled only matters when rendering an active, disabled button as <a>...
      loading: loading,
    }),
    isAnchor(props)
      ? twMerge(
          disabled && 'btn-disabled',
          variant === 'outline' &&
            (disabled ? 'border border-current' : 'btn-outline'),
          variant === 'link' && !disabled && 'btn-link'
        )
      : twMerge(
          disabled && 'btn-disabled',
          clsx({
            [`btn-${variant}`]: variant,
          })
        )
  )
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const classes = makeClassName(props)

  const { href, style, children, startIcon, endIcon, loading, target } = props

  return isAnchor(props) ? (
    <a
      className={classes}
      style={style}
      href={href}
      target={target}
      data-theme={props.dataTheme}
      //ref={(ref as React.ForwardedRef<HTMLAnchorElement>) || null}
    >
      {startIcon && !loading && startIcon}
      {children}
      {endIcon && endIcon}
    </a>
  ) : (
    <button
      {...props}
      className={classes}
      ref={(ref as React.ForwardedRef<HTMLButtonElement>) || null}
    >
      {startIcon && !loading && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
}) //as PolymorphicButton

export default Object.assign(Button, { displayName: 'Button' })
