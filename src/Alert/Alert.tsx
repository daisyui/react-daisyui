import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentStatus
} from '../types'

export type AlertProps = 
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    children?: ReactNode | ReactNode[]
    icon?: ReactNode
    status?: ComponentStatus
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  children,
  icon,
  status,
  dataTheme,
  className,
  ...props
}, ref): JSX.Element => {
  const classes = clsx(
    'alert',
    className,
    {
      [`alert-${status}`]: status,
    }
  )

  return (
    <div
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      <div className="flex-1">
        {icon}
        <label>{children}</label>
      </div>
    </div>
  )
})

Alert.displayName = "Alert"

export default Alert
