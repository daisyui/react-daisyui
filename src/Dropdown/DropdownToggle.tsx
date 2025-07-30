import React, { forwardRef, HTMLAttributes } from 'react'
import Button, { ButtonProps } from '../Button'
import Label, { LabelProps } from '../Form/Label'

export type ButtonDropdownToggleProps = ButtonProps & {
  button?: true
  unstyled?: false
}

export type LabelDropdownToggleProps = Omit<LabelProps, 'color'> & {
  button: false
  unstyled?: false
}

export type UnstyledDropdownToggleProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color'
> & {
  button?: false
  unstyled: true
}

export type DropdownToggleProps =
  | ButtonDropdownToggleProps
  | LabelDropdownToggleProps
  | UnstyledDropdownToggleProps

const DropdownToggle = forwardRef<HTMLElement, DropdownToggleProps>(
  (props, ref) => {
    const { button = true, unstyled = false, ...rest } = props

    if (unstyled) {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="button"
          tabIndex={0}
          {...(rest as React.HTMLAttributes<HTMLElement>)}
        />
      )
    } else if (button) {
      return <Button ref={ref} {...(rest as ButtonDropdownToggleProps)} />
    } else {
      return (
        <Label
          ref={ref as React.Ref<HTMLLabelElement>}
          role="button"
          tabIndex={0}
          {...(rest as LabelDropdownToggleProps)}
        />
      )
    }
  }
)

export type SummaryProps = Omit<ButtonProps, 'tag'>
export const Summary = forwardRef<HTMLElement, SummaryProps>(
  (props, ref): JSX.Element => {
    return <Button {...props} ref={ref} tag="summary" />
  }
)

export default DropdownToggle
