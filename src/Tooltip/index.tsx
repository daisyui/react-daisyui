import React, { ReactNode } from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentPosition,
  ComponentStatus
} from '../types'

export interface TooltipProps extends IComponentBaseProps {
  message: string
  children: ReactNode | ReactNode[]
  open?: boolean
  color?: ComponentColor
  status?: ComponentStatus
  position?: ComponentPosition
}

const Tooltip = ({
  message,
  children,
  open,
  color,
  status,
  position,
  dataTheme,
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
      data-theme={dataTheme}
      data-tip={message}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

export default Tooltip