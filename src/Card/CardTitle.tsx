import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    tag?: ElementType
  }

const CardTitle = ({ className, tag = 'div', ...props }: CardTitleProps) => {
  const Tag = tag

  return <Tag className={twMerge('card-title', className)} {...props} />
}

export default CardTitle
