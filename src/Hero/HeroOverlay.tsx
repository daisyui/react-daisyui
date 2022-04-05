import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type HeroOverlayProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const HeroOverlay = React.forwardRef<HTMLDivElement, HeroOverlayProps>(
  ({ dataTheme, className, children, ...props }, ref): JSX.Element => {
    const classes = twMerge('hero-overlay', className)

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default HeroOverlay
