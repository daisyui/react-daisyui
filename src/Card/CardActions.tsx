import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export interface CardActionsProps extends IComponentBaseProps {
  children?: ReactNode
}

const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div className={twMerge('card-actions', className)} {...props} />
)

export default CardActions
