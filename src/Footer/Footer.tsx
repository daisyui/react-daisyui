import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

import FooterTitle from './FooterTitle'

export interface FooterProps extends IComponentBaseProps {
  children?: ReactNode
  center: boolean
}

const Footer = ({ center, className, ...props }: FooterProps) => (
  <div
    className={clsx('footer', { 'footer-center': center }, className)}
    {...props}
  />
)

Footer.Title = FooterTitle

export default Footer
