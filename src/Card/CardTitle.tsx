import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { IComponentBaseProps } from '../types'

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    tag?: ElementType
  }

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ className, tag = 'div', ...props }, ref) => {
    const Tag = tag

    return (
      <Tag {...props} className={twMerge('card-title', className)} ref={ref} />
    )
  }
)

export default CardTitle
