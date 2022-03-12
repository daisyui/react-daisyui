import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import NavbarSection, { NavbarSectionProps } from './NavbarSection'

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Navbar = ({
  children,
  dataTheme,
  className,
  ...props
}: NavbarProps): JSX.Element => {
  const classes = twMerge('navbar', className)

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      {children}
    </div>
  )
}

const NavbarStart = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="start" />
)
const NavbarCenter = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="center" />
)
const NavbarEnd = (props: Omit<NavbarSectionProps, 'section'>) => (
  <NavbarSection {...props} section="end" />
)

Navbar.Start = NavbarStart
Navbar.Center = NavbarCenter
Navbar.End = NavbarEnd

export default Navbar
