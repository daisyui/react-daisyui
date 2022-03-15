import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import StatItem from './StatItem'

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Stat = ({ dataTheme, className, ...props }: StatProps): JSX.Element => {
  const classes = twMerge('stat', className)

  return <div {...props} data-theme={dataTheme} className={classes} />
}

Stat.Item = StatItem

export default Stat
