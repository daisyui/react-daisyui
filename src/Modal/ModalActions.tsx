import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

type ModalActionsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  ({ children, className, ...props }, ref) => {
    const classes = twMerge('modal-action', className)
    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

ModalActions.displayName = 'ModalActions'

export default ModalActions
