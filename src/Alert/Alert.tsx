import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentStatus
} from '../types'

export interface AlertProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  icon?: ReactNode
  status?: ComponentStatus
 }

const Alert = ({
  children,
  icon,
  status,
  dataTheme,
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
      data-theme={dataTheme}
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
