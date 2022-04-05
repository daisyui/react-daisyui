import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardActionsProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={twMerge('card-actions', className)} ref={ref} />
  )
)

export default CardActions
