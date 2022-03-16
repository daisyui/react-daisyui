import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { NavbarProps } from './Navbar'

export type NavbarSectionProps = NavbarProps & {
  section: 'start' | 'center' | 'end'
}

const NavbarSection = React.forwardRef<HTMLDivElement, NavbarSectionProps>(
  ({ children, section, dataTheme, className, style }, ref): JSX.Element => {
    const classes = twMerge(
      'flex-1',
      className,
      clsx({
        [`navbar-${section}`]: section,
      })
    )

    return (
      <div data-theme={dataTheme} className={classes} style={style} ref={ref}>
        {children}
      </div>
    )
  }
)

export default NavbarSection
