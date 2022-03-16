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

const TabInner = <T extends string | number | undefined>(
  props: TabProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const {
    children,
    value,
    activeValue,
    onClick,
    size,
    variant,
    className,
    style,
    ...rest
  } = props

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
      {...rest}
      className={classes}
      style={style}
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </a>
  )
}

// Make forwardRef work with generic component
const Tab = React.forwardRef(TabInner) as <T>(
  props: TabProps<T> & { ref?: React.ForwardedRef<HTMLAnchorElement> }
) => ReturnType<typeof TabInner>

export default Tab
