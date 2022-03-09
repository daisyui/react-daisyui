import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { IComponentBaseProps } from '../types'

export interface CardBodyProps extends IComponentBaseProps {
  children?: ReactNode
}

const CardBody = ({ className, ...props }: CardBodyProps) => (
  <div className={clsx('card-body', className)} {...props} />
)

export default CardBody
