import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type StatSectionProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    section: 'title' | 'value' | 'desc' | 'figure' | 'actions'
  }

const StatSection = React.forwardRef<HTMLDivElement, StatSectionProps>(
  ({ children, section, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'stat-title': section === 'title',
        'stat-value': section === 'value',
        'stat-desc': section === 'desc',
        'stat-figure': section === 'figure',
        'stat-actions': section === 'actions',
      })
    )

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default StatSection
