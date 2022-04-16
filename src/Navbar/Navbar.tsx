import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import NavbarSection, { NavbarSectionProps } from './NavbarSection'

export type NavbarProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ children, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('navbar', className)

    return (
      <div
        role="navigation"
        aria-label="Navbar"
        {...props}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

const NavbarStart = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} section="start" ref={ref} />)

const NavbarCenter = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} section="center" ref={ref} />)

const NavbarEnd = React.forwardRef<
  HTMLDivElement,
  Omit<NavbarSectionProps, 'section'>
>((props, ref) => <NavbarSection {...props} section="end" ref={ref} />)

export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
})
