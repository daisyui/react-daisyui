import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentSize
} from '../types'

export interface TabsProps<T> extends IComponentBaseProps {
  children: ReactElement<TabProps<T>>[]
  value?: T
  onChange?: (value: T) => void
  boxed?: boolean
}

const Tabs = <T extends string | number | undefined>({
  children,
  value,
  onChange,
  boxed,
  dataTheme,
  className,
  style,
}: TabsProps<T>): JSX.Element => {
  const [activeValue, setActiveValue] = useState<T | undefined>(value)

  const classes = clsx(
    'tabs',
    className,
    {
      'tabs-boxed': boxed,
    }
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children.map((child) => {
        return cloneElement(child, {
          activeValue: activeValue,
          onClick: (value: T) => {
            setActiveValue(value)
            onChange && onChange(value)
          },
        })
      })}
    </div>
  )
}

type TabProps<T> = {
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
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </a>
  )
}

Tabs.Tab = Tab

export default Tabs