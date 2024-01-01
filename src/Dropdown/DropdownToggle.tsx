import React, { forwardRef } from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button, { ButtonProps } from '../Button'

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
          type="button"
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

export type SummaryProps = Omit<ButtonProps, 'tag'>
export const Summary = forwardRef<HTMLElement, SummaryProps>(
  (props, ref): JSX.Element => {
    return <Button {...props} ref={ref} tag="summary" />
  }
)

export default DropdownToggle
