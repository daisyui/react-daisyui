import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types';

export interface NavbarProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
}

const Navbar = ({
  children,
  dataTheme,
  className,
  style,
}: NavbarProps): JSX.Element => {
  const classes = clsx(
    'navbar',
    className,
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

interface NavbarSectionProps extends NavbarProps {
  section: 'start' | 'center' | 'end'
}

const NavbarSection = ({
  children,
  section,
  dataTheme,
  className,
  style,
}: NavbarSectionProps): JSX.Element => {
  const classes = clsx(
    'flex-1',
    className,
    {
      [`navbar-${section}`]: section,
    }
  )

  return (
    <div
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </div>
  )
}

const NavbarStart = (props: Omit<NavbarSectionProps, "section">) => <NavbarSection {...props} section="start"/>
const NavbarCenter = (props: Omit<NavbarSectionProps, "section">) => <NavbarSection {...props} section="center"/>
const NavbarEnd = (props: Omit<NavbarSectionProps, "section">) => <NavbarSection {...props} section="end"/>

Navbar.Start = NavbarStart
Navbar.Center = NavbarCenter
Navbar.End = NavbarEnd

export default Navbar