import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentStatus } from '../types'

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    icon?: ReactNode
    status?: ComponentStatus
  }

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, icon, status, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'alert',
      className,
      clsx({
        'alert-info': status === 'info',
        'alert-success': status === 'success',
        'alert-warning': status === 'warning',
        'alert-error': status === 'error',
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
