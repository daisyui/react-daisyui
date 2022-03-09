import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

export interface BadgeProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  variant?: 'outline'
  size?: ComponentSize
  color?: ComponentColor
}

const Badge = ({
  children,
  variant,
  size,
  color,
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
