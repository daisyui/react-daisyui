import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  ComponentColor,
  ComponentPosition,
  ComponentStatus
} from '../types'

export type TooltipProps = {
  message: string
  children: ReactNode | ReactNode[]
  open?: boolean
  color?: ComponentColor
  status?: ComponentStatus
  position?: ComponentPosition
  className?: string
  style?: Record<string, string | number>
}

const Tooltip = ({
  message,
  children,
  open,
  color,
  status,
  position,
  className,
  style,
}: TooltipProps): JSX.Element => {
  const classes = clsx(
    'tooltip',
    className,
    {
      'tooltip-open': open,
      [`tooltip-${color}`]: color,
      [`tooltip-${status}`]: status,
      [`tooltip-${position}`]: position,
    }
  )

  return (
    <div
      data-tip={message}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Tooltip