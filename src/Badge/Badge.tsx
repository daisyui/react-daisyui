import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

export type BadgeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  IComponentBaseProps & {
    variant?: 'outline'
    outline?: boolean
    size?: ComponentSize
    color?: ComponentColor
    responsive?: boolean
  }

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      children,
      variant,
      outline,
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
        'badge-lg': size === 'lg',
        'badge-md': size === 'md',
        'badge-sm': size === 'sm',
        'badge-xs': size === 'xs',
        'badge-outline': variant === 'outline' || outline,
        'badge-neutral': color === 'neutral',
        'badge-primary': color === 'primary',
        'badge-secondary': color === 'secondary',
        'badge-accent': color === 'accent',
        'badge-ghost': color === 'ghost',
        'badge-info': color === 'info',
        'badge-success': color === 'success',
        'badge-warning': color === 'warning',
        'badge-error': color === 'error',
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
