import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import StatItem from './StatItem'

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('stat', className)

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref} />
    )
  }
)

export default Object.assign(Stat, { Item: StatItem })
