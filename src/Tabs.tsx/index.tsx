import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import clsx from 'clsx'

import { ComponentSize } from '../types'

export type TabsProps<T> = {
  children: ReactElement<TabProps<T>>[]
  value?: T
  onChange?: (value: T) => void
  boxed?: boolean
  className?: string
  style?: Record<string, string | number>
}

const Tabs = <T extends string | number | undefined>({
  children,
  value,
  onChange,
  boxed,
  className,
  style,
}: TabsProps<T>): JSX.Element => {
  const [activeValue, setActiveValue] = useState<T>(value)

  const classes = clsx(
    'tabs',
    className,
    {
      'tabs-boxed': boxed,
    }
  )

  return (
    <div
      className={classes}
      style={style}
    >
      {children.map((child) => {
        return cloneElement(child, {
          activeValue: activeValue,
          onClick: (value) => {
            setActiveValue(value)
            onChange(value)
          },
        })
      })}
    </div>
  )
}

type TabProps<T> = {
  children?: ReactNode | ReactNode[]
  value?: T
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
  const classes = clsx(
    'tab',
    className,
    {
      'tab-active': value != null && value === activeValue,
      [`tab-${size}`]: size,
      [`tab-${variant}`]: variant,
    }
  )

  return (
    <a
      className={classes}
      style={style}
      onClick={() => onClick(value)}
    >
      {children}
    </a>
  )
}

Tabs.Tab = Tab

export default Tabs