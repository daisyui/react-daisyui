import React, {ReactNode} from 'react'
import clsx from 'clsx'

import { ComponentColor, ComponentSize, ComponentStatus } from '../types'

export type BadgeProps = {
  children?: ReactNode | ReactNode[]
  variant?: 'outline'
  size?: ComponentSize
  color?: ComponentColor
  status?: ComponentStatus
  className?: string
  style?: Record<string, string | number>
}

const Badge = ({
  children,
  variant,
  size,
  color,
  status,
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
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Badge
