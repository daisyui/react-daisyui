import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

export type ButtonProps =
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & IComponentBaseProps
  & {
    children?: ReactNode | ReactNode[]
    href?: string
    shape?: ComponentShape
    size?: ComponentSize
    variant?: 'outline' | 'link'
    color?: ComponentColor
    fullWidth?: boolean
    responsive?: boolean
    animation?: boolean
    loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  href,
  shape,
  size,
  variant,
  color,
  fullWidth,
  responsive,
  animation = true,
  loading,
  dataTheme,
  className,
  style,
  ...props
}, ref): JSX.Element => {
  const classes = twMerge(
    'btn',
    className,
    clsx({
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      [`btn-${variant}`]: variant,
      [`btn-${color}`]: color,
      'btn-block': fullWidth,
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
      'no-animation': !animation,
      'btn-disabled': props.disabled,
      'loading': loading,
    })
  )

  if (href) {
    return (
      <a
        className={classes}
        style={style}
      >
        {children}
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
      >
        {children}
      </button>
    )
  }
})

Button.displayName = "Button"

export default Button
