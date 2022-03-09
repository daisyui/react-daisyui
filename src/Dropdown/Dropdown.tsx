import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface DropdownProps extends IComponentBaseProps {
    children?: ReactNode | ReactNode[]
    item?: ReactNode
    horizontal?: 'left' | 'center' | 'right'
    vertical?: 'top' | 'middle' | 'end'
    hover?: boolean
    open?: boolean
}
  
const Dropdown = ({
    children,
    item,
    horizontal,
    vertical,
    hover,
    open,
    dataTheme,
}: DropdownProps): JSX.Element => {
    const classes = clsx(
        'dropdown',
        {
            [`dropdown-${horizontal}`]: horizontal,
            [`dropdown-${vertical}`]: vertical,
            'dropdown-hover': hover,
            'dropdown-open': open,
        }
    )

    return (
        <div data-theme={dataTheme} className={classes}>
            <label tabIndex={0}>{children}</label>
            <ul className='dropdown-content'>
                {item}
            </ul>
        </div>
    )
}

export default Dropdown
