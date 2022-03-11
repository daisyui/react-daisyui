import React from 'react'
import clsx from 'clsx'

import { NavbarProps } from './Navbar'

export type NavbarSectionProps = NavbarProps & {
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

export default NavbarSection
