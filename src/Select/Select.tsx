import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor, ComponentSize } from '../types'

import SelectOption, { SelectOptionProps } from './SelectOption'

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'color'
> &
  IComponentBaseProps & {
    children: ReactElement<SelectOptionProps>[]
    size?: ComponentSize
    color?: ComponentColor
    bordered?: boolean
    borderOffset?: boolean
  }

const SelectInner = (
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
): JSX.Element => {
  const {
    children,
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
    <select {...rest} ref={ref} data-theme={dataTheme} className={classes}>
      {children}
    </select>
  )
}

const Select = React.forwardRef(SelectInner)
export default Object.assign(Select, { Option: SelectOption })
