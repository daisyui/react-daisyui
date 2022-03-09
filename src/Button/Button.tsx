import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
  ComponentStatus,
} from '../types'

export interface ButtonProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  onClick?: () => void
  href?: string
  shape?: ComponentShape
  size?: ComponentSize
  variant?: 'outline' | 'link'
  color?: ComponentColor
  status?: ComponentStatus
  fullWidth?: boolean
  responsive?: boolean
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
  responsive,
  animation = true,
  loading,
  disabled,
  dataTheme,
  className,
  style,
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
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
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
        data-theme={dataTheme}
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
