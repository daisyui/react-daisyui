import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { ComponentSize } from '../types'

export type TabProps<T> = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'onClick'
> & {
  value: T
  activeValue?: T
  onClick?: (value: T) => void
  size?: ComponentSize
  variant?: 'boxed' | 'bordered' | 'lifted'
  disabled?: boolean
}

const TabInner = <T extends string | number | undefined>(
  {
    children,
    value,
    activeValue,
    onClick,
    size,
    variant,
    disabled,
    className,
    style,
    ...props
  }: TabProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const classes = twMerge(
    'tab',
    className,
    clsx({
      'tab-active': value != null && value === activeValue,
      'tab-disabled': disabled,
      'tab-lg': size === 'lg',
      'tab-md': size === 'md',
      'tab-sm': size === 'sm',
      'tab-xs': size === 'xs',
      'tab-bordered': variant === 'bordered',
      'tab-lifted': variant === 'lifted',
    })
  )

  return (
    <a
      role="tab"
      {...props}
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
