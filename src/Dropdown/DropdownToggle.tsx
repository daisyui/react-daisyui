import React from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button from '../Button'

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    button?: boolean
    disabled?: boolean
  }

const DropdownToggle = ({
  children,
  color,
  size,
  button = true,
  dataTheme,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? (
        <Button
          dataTheme={dataTheme}
          color={color}
          size={size}
          disabled={disabled}
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  )
}

export default DropdownToggle
