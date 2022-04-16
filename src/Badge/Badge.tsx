import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

export type BadgeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  IComponentBaseProps & {
    variant?: 'outline'
    size?: ComponentSize
    color?: ComponentColor
    responsive?: boolean
  }

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      children,
      variant,
      size,
      color,
      responsive,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'badge',
      className,
      clsx({
        [`badge-${size}`]: size,
        [`badge-${variant}`]: variant,
        [`badge-${color}`]: color,
        'badge-xs md:badge-sm lg:badge-md xl:badge-lg': responsive,
      })
    )

    return (
      <div
        aria-label="Badge"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
