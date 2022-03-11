import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type FooterTitleProps =
  & React.HTMLAttributes<HTMLSpanElement>
  & IComponentBaseProps 
  & {
    children?: ReactNode
}

const FooterTitle = ({ className, ...props }: FooterTitleProps) => {
  return <span className={twMerge('footer-title', className)} {...props} />
}

export default FooterTitle
