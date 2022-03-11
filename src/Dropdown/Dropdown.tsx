import React, { LegacyRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import DropdownToggle from './DropdownToggle'

export type DropdownProps =
    & React.HTMLAttributes<HTMLDivElement>
    & IComponentBaseProps 
    & {
        ref?: LegacyRef<HTMLDivElement>
        item?: ReactNode
        horizontal?: 'left' | 'center' | 'right'
        vertical?: 'top' | 'middle' | 'end'
        hover?: boolean
        open?: boolean
}
  
const Dropdown = ({
    children,
    ref,
    item,
    horizontal,
    vertical,
    hover,
    open,
    dataTheme,
    ...props
}: DropdownProps): JSX.Element => {
    const classes = twMerge(
        'dropdown',
        clsx({
            [`dropdown-${horizontal}`]: horizontal,
            [`dropdown-${vertical}`]: vertical,
            'dropdown-hover': hover,
            'dropdown-open': open,
        })
    )

    return (
        <div
            {...props}
            ref={ref}
            data-theme={dataTheme}
            className={classes}
        >
            <label tabIndex={0}>{children}</label>
            <ul className='dropdown-content'>
                {item}
            </ul>
        </div>
    )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export default Dropdown
