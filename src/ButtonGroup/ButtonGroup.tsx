import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('btn-group', className)

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default ButtonGroup
