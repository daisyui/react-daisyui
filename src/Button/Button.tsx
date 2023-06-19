import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import Loading from '../Loading';
import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> &
  IComponentBaseProps & {
    href?: string
    shape?: ComponentShape
    size?: ComponentSize
    variant?: 'outline' | 'link'
    color?: ComponentColor
    wide?: boolean
    fullWidth?: boolean
    responsive?: boolean
    animation?: boolean
    loading?: boolean 
    active?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      wide,
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
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        'btn-lg': size === 'lg',
        'btn-md': size === 'md',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs',
        'btn-circle': shape === 'circle',
        'btn-square': shape === 'square',
        'btn-outline': variant === 'outline',
        'btn-link': variant === 'link',
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',
        'btn-ghost': color === 'ghost',
        'btn-wide': wide,
        'btn-block': fullWidth,
        'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
      })
    )

    if (href) {
      return (
        <a className={classes} style={style} href={href}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      )
    } else {
      return (
        <button
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {!startIcon && loading && (<Loading size={size} />)}
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
