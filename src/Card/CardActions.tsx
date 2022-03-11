import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardActionsProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps

const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div className={twMerge('card-actions', className)} {...props} />
)

export default CardActions
