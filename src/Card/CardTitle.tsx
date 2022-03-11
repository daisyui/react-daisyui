import React, { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export interface CardTitleProps extends IComponentBaseProps {
  children?: ReactNode
  tag?: ElementType
}

const CardTitle = ({ className, tag = 'div', ...props }: CardTitleProps) => {
  const Tag = tag

  return <Tag className={twMerge('card-title', className)} {...props} />
}

export default CardTitle
