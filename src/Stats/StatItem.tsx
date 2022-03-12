import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type StatItemProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    variant: 'title' | 'value' | 'desc' | 'figure'
  }

const StatItem = ({
  variant,
  className,
  ...props
}: StatItemProps): JSX.Element => {
  const classes = twMerge(
    className,
    clsx({
      [`stat-${variant}`]: variant,
    })
  )

  return <div {...props} className={classes} />
}

export default StatItem
