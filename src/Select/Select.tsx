import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useState
} from 'react'
import clsx from 'clsx'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
} from '../types';

export type SelectOption<T> = {
  value: T
  label: string
}

export interface SelectProps<T> extends IComponentBaseProps {
  children: ReactElement<SelectOptionProps<T>>[]
  initialValue?: T
  value?: T
  onChange?: (value: T) => void
  size?: ComponentSize
  color?: ComponentColor
  status?: ComponentStatus
  bordered?: boolean
}

const Select = <T extends string | number | undefined>({
  children,
  initialValue,
  value,
  onChange,
  size,
  color,
  status,
  bordered = true,
  dataTheme,
  className,
  style,
}: SelectProps<T>): JSX.Element => {
  const classes = clsx(
    'select',
    className,
    {
      [`select-${size}`]: size,
      [`select-${color}`]: color,
      [`select-${status}`]: status,
      'select-bordered': bordered,
    }
  )

  const [selectedValue, setSelectedValue] =
    useState<T | undefined>(value || initialValue)

  return (
    <select
      data-theme={dataTheme}
      className={classes}
      style={style}
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

type SelectOptionProps<T> = {
  selectedValue?: T
  value: T
  children: ReactNode | ReactNode[]
}

const SelectOption = <T extends string | number | undefined>({
  selectedValue,
  value,
  children,
}: SelectOptionProps<T>): JSX.Element => {
  return (
    <option
      selected={value === selectedValue}
    >
      {children}
    </option>
  )
}

Select.Option = SelectOption

export default Select