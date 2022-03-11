import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export interface FooterTitleProps extends IComponentBaseProps {
  children?: ReactNode
}

const FooterTitle = ({ className, ...props }: FooterTitleProps) => {
  return <span className={twMerge('footer-title', className)} {...props} />
}

export default FooterTitle
