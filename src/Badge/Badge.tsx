import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    variant?: 'outline'
    size?: ComponentSize
    color?: ComponentColor
  }

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, variant, size, color, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'badge',
      className,
      clsx({
        [`badge-${size}`]: size,
        [`badge-${variant}`]: variant,
        [`badge-${color}`]: color,
      })
    )

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
