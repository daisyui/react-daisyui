import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

export type InputGroupProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    size?: ComponentSize
    vertical?: boolean
  }

const InputGroup = forwardRef<HTMLLabelElement, InputGroupProps>(
  (
    { children, size, vertical, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'input-group',
      className,
      clsx({
        [`input-group-${size}`]: size,
        'input-group-vertical': vertical,
      })
    )

    return (
      <label {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </label>
    )
  }
)

InputGroup.displayName = 'InputGroup'

export default InputGroup
