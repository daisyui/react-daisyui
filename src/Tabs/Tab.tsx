import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentSize } from '../types'

export type TabProps<T> = {
  children?: ReactNode | ReactNode[]
  value: T
  activeValue?: T
  onClick?: (value: T) => void
  size?: ComponentSize
  variant?: 'bordered' | 'lifted'
  className?: string
  style?: Record<string, string | number>
}

const Tab = <T extends string | number | undefined>({
  children,
  value,
  activeValue,
  onClick,
  size,
  variant,
  className,
  style,
}: TabProps<T>): JSX.Element => {
  const classes = twMerge(
    'tab',
    className,
    clsx({
      'tab-active': value != null && value === activeValue,
      [`tab-${size}`]: size,
      [`tab-${variant}`]: variant,
    })
  )

  return (
    <a
      className={classes}
      style={style}
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </a>
  )
}

export default Tab
