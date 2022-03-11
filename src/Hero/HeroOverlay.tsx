import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type HeroOverlayProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const HeroOverlay = ({
  dataTheme,
  className,
  children,
  ...props
}: HeroOverlayProps): JSX.Element => {
  const classes = twMerge('hero-overlay', className)

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

export default HeroOverlay
