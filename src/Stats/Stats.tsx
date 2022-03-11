import React, { LegacyRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Stat from './Stat'

export type StatsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    ref: LegacyRef<HTMLDivElement>
    horizontal?: boolean
    vertical?: boolean
  }

const Stats = ({
  horizontal,
  vertical,
  ref,
  dataTheme,
  className,
  children,
  ...props
}: StatsProps): JSX.Element => {
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

Stats.Stat = Stat

export default Stats
