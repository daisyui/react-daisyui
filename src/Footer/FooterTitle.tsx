
   
import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface FooterTitleProps extends IComponentBaseProps {
  children?: ReactNode
}

const FooterTitle = ({ className, ...props }: FooterTitleProps) => {
  return <span className={clsx('footer-title', className)} {...props} />
}

export default FooterTitle
