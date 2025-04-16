import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentLayout } from '../types'

import FooterTitle from './FooterTitle'

export type FooterProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    center?: boolean
    layout?: ComponentLayout
  }

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ center, layout = 'vertical', dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      'footer',
      className,
      clsx({
        'footer-center': center,
        'footer-vertical': layout === 'vertical',
        'footer-horizontal': layout === 'horizontal',
      })
    )

    return (
      <div
        role="contentinfo"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      />
    )
  }
)

export default Object.assign(Footer, { Title: FooterTitle })
