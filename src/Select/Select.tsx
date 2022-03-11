import React, {
  cloneElement,
  LegacyRef,
  ReactElement,
  useState
} from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

import SelectOption, { SelectOptionProps } from './SelectOption'

export type SelectOption<T> = {
  value: T
  label: string
}

export type SelectProps<T> =
  & React.SelectHTMLAttributes<HTMLSelectElement>
  & IComponentBaseProps
  & {
    children: ReactElement<SelectOptionProps<T>>[]
    ref?: LegacyRef<HTMLSelectElement>
    initialValue?: T
    value?: T
    onChange?: (value: T) => void
    size?: ComponentSize
    color?: ComponentColor
    bordered?: boolean
}

const Select = <T extends string | number | undefined>({
  children,
  ref,
  initialValue,
  value,
  onChange,
  size,
  color,
  bordered = true,
  dataTheme,
  className,
  ...props
}: SelectProps<T>): JSX.Element => {
  const classes = twMerge(
    'select',
    className,
    clsx({
      [`select-${size}`]: size,
      [`select-${color}`]: color,
      'select-bordered': bordered,
    })
  )

  const [selectedValue, setSelectedValue] =
    useState<T | undefined>(value || initialValue)

  return (
    <select
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
      onChange={(e) => {
        setSelectedValue(e.currentTarget.value as T)
        onChange && onChange(e.currentTarget.value as T)
      }}
    >
      {children.map((child) => {
        return cloneElement(child, {
          selectedValue: selectedValue,
        })
      })}
    </select>
  )
}

Select.Option = SelectOption

export default Select