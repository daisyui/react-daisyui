import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import HeroContent from './HeroContent'
import HeroOverlay from './HeroOverlay'

export type HeroProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Hero = ({
  dataTheme,
  className,
  children,
  ...props
}: HeroProps): JSX.Element => {
  const classes = twMerge('hero', className)

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

Hero.Content = HeroContent
Hero.Overlay = HeroOverlay

export default Hero
