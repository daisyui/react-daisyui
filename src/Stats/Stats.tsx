import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Stat from './Stat'

export type StatsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    horizontal?: boolean
    vertical?: boolean
  }

const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  (
    { horizontal, vertical, dataTheme, className, children, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'stats',
      className,
      clsx({
        'stats-horizontal': horizontal,
        'stats-vertical': vertical,
      })
    )

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    )
  }
)

export default Object.assign(Stats, { Stat })
