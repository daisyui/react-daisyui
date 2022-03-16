import React from 'react'
import { twMerge } from 'tailwind-merge'

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>

const FooterTitle = React.forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = twMerge('footer-title', className)

    return <span {...props} className={classes} ref={ref} />
  }
)

export default FooterTitle
