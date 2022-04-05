import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentPosition,
} from '../types'

export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  IComponentBaseProps & {
    message: string
    open?: boolean
    color?: ComponentColor
    position?: ComponentPosition
  }

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      message,
      children,
      open,
      color,
      position,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'tooltip',
      className,
      clsx({
        'tooltip-open': open,
        [`tooltip-${color}`]: color,
        [`tooltip-${position}`]: position,
      })
    )

    return (
      <div
        role="tooltip"
        {...props}
        ref={ref}
        data-theme={dataTheme}
        data-tip={message}
        className={classes}
      >
        {children}
      </div>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
