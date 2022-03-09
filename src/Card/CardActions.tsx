import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { IComponentBaseProps } from '../types'

export interface CardActionsProps extends IComponentBaseProps {
  children?: ReactNode
}

const CardActions = ({ className, ...props }: CardActionsProps) => (
  <div className={clsx('card-actions', className)} {...props} />
)

export default CardActions
