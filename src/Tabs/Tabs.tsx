import React, { cloneElement, ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import Tab, { TabProps } from './Tab'

export type TabsProps<T> = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> &
  IComponentBaseProps & {
    children: ReactElement<TabProps<T>>[]
    value?: T
    onChange?: (value: T) => void
    variant?: 'bordered' | 'lifted'
    size?: ComponentSize
    boxed?: boolean
  }

const TabsInner = <T extends string | number | undefined>(
  {
    children,
    value,
    onChange,
    variant,
    size,
    boxed,
    dataTheme,
    className,
    ...props
  }: TabsProps<T>,
  ref?: React.ForwardedRef<T>
): JSX.Element => {
  const classes = twMerge(
    'tabs',
    className,
    clsx({
      'tabs-boxed': boxed,
    })
  )

  return (
    <div
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      role="tablist"
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      {children.map((child, index) => {
        return cloneElement(child, {
          key: child.props.value,
          variant,
          size,
          activeValue: value,
          onClick: (value: T) => {
            onChange && onChange(value)
          },
        })
      })}
    </div>
  )
}

// Make forwardRef work with generic component
const Tabs = React.forwardRef(TabsInner) as <T>(
  props: TabsProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof TabsInner>

export default Object.assign(Tabs, { Tab })
