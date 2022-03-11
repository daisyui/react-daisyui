import React, {
  cloneElement,
  ReactElement,
  useState,
} from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentSize
} from '../types'

import Tab, { TabProps } from './Tab'

export type TabsProps<T> =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    children: ReactElement<TabProps<T>>[]
    value?: T
    onChange?: (value: T) => void
    variant?: 'bordered' | 'lifted'
    size?: ComponentSize
    boxed?: boolean
}

const Tabs = <T extends string | number | undefined>({
  children,
  value,
  onChange,
  variant,
  size,
  boxed,
  dataTheme,
  className,
  ...props
}: TabsProps<T>): JSX.Element => {
  const [activeValue, setActiveValue] = useState<T | undefined>(value)

  const classes = twMerge(
    'tabs',
    className,
    clsx({
      'tabs-boxed': boxed,
    })
  )

  return (
    <div
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      {children.map((child) => {
        return cloneElement(child, {
          variant,
          size,
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

Tabs.Tab = Tab

export default Tabs