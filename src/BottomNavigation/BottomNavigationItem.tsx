import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentBrandColors,
  ComponentStatus,
} from '../types'

export type BottomNavigationItemProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    IComponentBaseProps & {
      color?: ComponentBrandColors | ComponentStatus
      active?: boolean
    }

const BottomNavigationItem = forwardRef<
  HTMLButtonElement,
  BottomNavigationItemProps
>(
  (
    { children, className, color, dataTheme, active, disabled, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'text-neutral': color === 'neutral',
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
        active: active,
        disabled: disabled,
      })
    )
    return (
      <button {...props} className={classes} data-theme={dataTheme} ref={ref}>
        {children}
      </button>
    )
  }
)

export default BottomNavigationItem
