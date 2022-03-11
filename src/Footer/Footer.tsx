import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import FooterTitle from './FooterTitle'

export type FooterProps = 
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    center: boolean
}

const Footer = ({ center, className, ...props }: FooterProps) => {
  const classes = twMerge(
    'footer',
    className,
    clsx({
      'footer-center': center
    })
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
