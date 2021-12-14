import React, {ReactNode} from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ComponentStatus
} from '../types'

export interface BadgeProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  variant?: 'outline'
  size?: ComponentSize
  color?: ComponentColor
  status?: ComponentStatus
}

const Badge = ({
  children,
  variant,
  size,
  color,
  status,
  dataTheme,
  className,
  style,
}: BadgeProps): JSX.Element => {
  const classes = clsx(
    'badge',
    className,
    {
      [`badge-${size}`]: size,
      [`badge-${variant}`]: variant,
      [`badge-${color}`]: color,
      [`badge-${status}`]: status,
    }
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Badge
