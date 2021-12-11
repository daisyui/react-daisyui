import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {ComponentStatus} from '../types'

export type AlertProps = {
  children?: ReactNode | ReactNode[]
  icon?: ReactNode
  status?: ComponentStatus
 }

const Alert = ({
  children,
  icon,
  status,
}: AlertProps): JSX.Element => {
  const classes = clsx(
    'alert',
    {
      [`alert-${status}`]: status,
    }
  )

  return (
    <div className={classes}>
      <div className="flex-1">
        {icon}
        <label>{children}</label>
      </div>
    </div>
  )
}

export default Alert