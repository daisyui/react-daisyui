import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type StatItemProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    variant: 'title' | 'value' | 'desc' | 'figure' | 'actions'
  }

const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ variant, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'stat-title': variant === 'title',
        'stat-value': variant === 'value',
        'stat-desc': variant === 'desc',
        'stat-figure': variant === 'figure',
        'stat-actions': variant === 'actions',
      })
    )

    return <div {...props} className={classes} ref={ref} />
  }
)

export default StatItem
