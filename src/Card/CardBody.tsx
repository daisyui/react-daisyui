import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const CardBody = ({ className, ...props }: CardBodyProps) => (
  <div className={twMerge('card-body', className)} {...props} />
)

export default CardBody
