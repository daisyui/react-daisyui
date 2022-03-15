import React from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button from '../Button'

export type DropdownToggleProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    button?: boolean
  }

const DropdownToggle = ({
  children,
  color,
  size,
  button = true,
  dataTheme,
  className,
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className}>
      {button ? (
        <Button dataTheme={dataTheme} color={color} size={size}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  )
}

export default DropdownToggle
