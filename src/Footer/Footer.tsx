import React from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

import FooterTitle from './FooterTitle'

export type FooterProps = 
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    center: boolean
}

const Footer = ({ center, className, ...props }: FooterProps) => {
  const classes = clsx(
    'footer', className, { 'footer-center': center }
  )

  return (
    <div
      className={classes}
      {...props}
    />
  )
}

Footer.Title = FooterTitle

export default Footer
