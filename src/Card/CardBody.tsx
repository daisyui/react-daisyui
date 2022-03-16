import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div {...props} className={twMerge('card-body', className)} ref={ref} />
  )
)

export default CardBody
