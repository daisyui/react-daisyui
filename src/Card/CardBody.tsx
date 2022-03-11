import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export interface CardBodyProps extends IComponentBaseProps {
  children?: ReactNode
}

const CardBody = ({ className, ...props }: CardBodyProps) => (
  <div className={twMerge('card-body', className)} {...props} />
)

export default CardBody
