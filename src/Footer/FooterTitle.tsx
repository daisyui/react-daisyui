import React from 'react'
import { twMerge } from 'tailwind-merge'

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>

const FooterTitle = ({ className, ...props }: FooterTitleProps) => {
  const classes = twMerge(
    'footer-title',
    className
  )

  return <span className={classes} {...props} />
}

export default FooterTitle
