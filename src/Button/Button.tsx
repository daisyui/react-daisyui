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
  disabled?: boolean
}

// Allow for proper typing when button is rendered as an anchor tag or a button tag

type ButtonElProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type AnchorElProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = ButtonElProps | AnchorElProps

type PolymorphicButton = {
  (props: AnchorElProps): JSX.Element
  (props: ButtonElProps): JSX.Element
}

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
    const baseClasses = twMerge(
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
      })
    )

    if (props.href) {
      // Handle disabled outline buttons differently when they are an anchor.
      // <a> tags do not support the disabled attribute, so instead we apply the same classes
      // that the disabled psuedotag applies to a regular button.
      const classes = twMerge(
        baseClasses,
        disabled && 'btn-disabled',
        variant === 'outline' &&
          (disabled ? 'border border-current' : 'btn-outline'),
        variant === 'link' && !disabled && 'btn-link'
      )
      return (
        <a
          {...props}
          data-theme={dataTheme}
          className={classes}
          style={style}
          href={props.href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      )
    } else {
      const classes = twMerge(
        baseClasses,
        disabled && 'btn-disabled',
        clsx({
          [`btn-${variant}`]: variant,
        })
      )

      return (
        <button
          {...(props as ButtonElProps)}
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
) as PolymorphicButton

export default Object.assign(Button, { displayName: 'Button' })
