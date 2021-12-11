import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  ComponentColor,
  ComponentShape,
  ComponentSize,
  ComponentStatus,
  ComponentVariant
} from '../types'

export type ButtonProps = {
  children?: ReactNode | ReactNode[]
  onClick?: () => void
  href?: string
  shape?: ComponentShape
  size?: ComponentSize
  variant?: ComponentVariant
  color?: ComponentColor
  status?: ComponentStatus
  fullWidth?: boolean
  className?: string
  style?: Record<string, string | number>
  animation?: boolean
  loading?: boolean
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  href,
  shape,
  size,
  variant,
  color,
  status,
  fullWidth,
  className,
  style,
  animation = true,
  loading,
  disabled,
}: ButtonProps): JSX.Element => {
  const classes = clsx(
    'btn',
    className,
    {
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      [`btn-${variant}`]: variant,
      [`btn-${color}`]: color,
      [`btn-${status}`]: status,
      'btn-block': fullWidth,
      'no-animation': !animation,
      'btn-disabled': disabled,
      'loading': loading,
    }
  )

  if (href) {
    return (
      <a
        className={classes}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

export default Button
