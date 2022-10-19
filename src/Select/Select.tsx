import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

import SelectOption, { SelectOptionProps } from './SelectOption'

export type SelectOption<T> = {
  value: T
  label: string
}

export type SelectProps<T> = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'value' | 'size' | 'color'
> &
  IComponentBaseProps & {
    children: ReactElement<SelectOptionProps<T>>[]
    value?: T
    onChange?: (value: T) => void
    size?: ComponentSize
    color?: ComponentColor
    bordered?: boolean
    borderOffset?: boolean
  }

const SelectInner = <T extends string | number | undefined>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLSelectElement>
): JSX.Element => {
  const {
    children,
    value,
    onChange,
    size,
    color,
    bordered = true,
    borderOffset,
    dataTheme,
    className,
    ...rest
  } = props

  const classes = twMerge(
    'select',
    className,
    clsx({
      [`select-${size}`]: size,
      [`select-${color}`]: color,
      [`focus:outline-offset-0`]: !borderOffset,
      'select-bordered': bordered,
    })
  )

  return (
    <select
      {...rest}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
      onChange={(e) => onChange?.(e.currentTarget.value as T)}
      value={value}
    >
      {children}
    </select>
  )
}

// Make forwardRef work with generic component
const Select = React.forwardRef(SelectInner) as <T>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<HTMLSelectElement> }
) => ReturnType<typeof SelectInner>

export default Object.assign(Select, { Option: SelectOption })
