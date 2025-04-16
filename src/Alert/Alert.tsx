import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentLayout,
  ComponentStatus,
  ComponentVariant,
} from '../types'

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    icon?: ReactNode
    layout?: ComponentLayout
    status?: ComponentStatus
    variant?: ComponentVariant
  }

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, icon, layout, status, variant, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'alert',
      className,
      clsx({
        'alert-vertical': layout === 'vertical',
        'alert-horizontal': layout === 'horizontal',
        'alert-info': status === 'info',
        'alert-success': status === 'success',
        'alert-warning': status === 'warning',
        'alert-error': status === 'error',
        'alert-soft': variant === 'soft',
        'alert-dash': variant === 'dash',
        'alert-outline': variant === 'outline',
      })
    )

    return (
      <div
        role="alert"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
      >
        {icon}
        {children}
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export default Alert
