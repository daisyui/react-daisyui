import React, { forwardRef, HTMLAttributes } from 'react'
import Button, { ButtonProps } from '../Button'
import Label, { LabelProps } from '../Form/Label'

export type ButtonDropdownToggleProps = ButtonProps & {
  button?: true
  unstyled?: false
}

export type LabelDropdownToggleProps = LabelProps & {
  button?: false
  unstyled?: false
}

export type DropdownToggleProps = HTMLAttributes<HTMLElement> &
  (ButtonDropdownToggleProps | LabelDropdownToggleProps)

const DropdownToggle = forwardRef<HTMLElement, DropdownToggleProps>(
  (props, ref) => {
    const { button = true, unstyled = false, children, ...rest } = props

    if (unstyled) {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          {...(rest as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </div>
      )
    }

    if (button) {
      return (
        <Button ref={ref} type="button" {...(rest as ButtonProps)}>
          {children}
        </Button>
      )
    } else {
      return (
        <Label
          ref={ref as React.Ref<HTMLLabelElement>}
          {...(rest as LabelProps)}
        >
          {children}
        </Label>
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
