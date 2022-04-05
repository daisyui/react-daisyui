import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

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
}

type ButtonElementProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
}

type AnchorElementProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'link'
  href: string
}

export type ButtonProps = ButtonElementProps | AnchorElementProps

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'btn',
      className,
      clsx(
        ((startIcon && !loading) || endIcon) && 'gap-2',
      {
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape,
        [`btn-${variant}`]: variant,
        [`btn-${color}`]: color,
        'btn-block': fullWidth,
        'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
        loading: loading,
      })
    )

    if ('href' in props)
    {
      props.as = 'link'
    }

    if (props.as === 'link') {
      return (
        <a
          {...props}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={classes}
          style={style}
          href={props.href}
        >
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      )
    } else {
      return (
        <button
          {...props}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {startIcon && !loading && startIcon}
          {children}
          {endIcon && endIcon}
        </button>
      )
    }
  }
)

Button.displayName = 'Button'

export default Button
