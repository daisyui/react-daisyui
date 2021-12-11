import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {ComponentStatus} from '../types'

export type AlertProps = {
  children?: ReactNode | ReactNode[]
  icon?: ReactNode
  status?: ComponentStatus
  className?: string
  style?: Record<string, string | number>
 }

const Alert = ({
  children,
  icon,
  status,
  className,
  style,
}: AlertProps): JSX.Element => {
  const classes = clsx(
    'alert',
    className,
    {
      [`alert-${status}`]: status,
    }
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <div className="flex-1">
        {icon}
        <label>{children}</label>
      </div>
    </div>
  )
}

export default Alert
