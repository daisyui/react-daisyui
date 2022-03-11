import React, { ReactNode } from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button from '../Button'

export type DropdownToggleProps =
  & React.LabelHTMLAttributes<HTMLLabelElement>
    & IComponentBaseProps
    & {
        color?: ComponentColor
        size?: ComponentSize
        button?: boolean
}

const DropdownToggle = ({
  className,
  color,
  size,
  button = true,
  children,
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className}>
      {button ? (
        <Button color={color} size={size}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  )
}

export default DropdownToggle
