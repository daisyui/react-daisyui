import React, { ReactElement } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface TableRowProps extends IComponentBaseProps {
    children: ReactElement[]
    active?: boolean
    hover?: boolean
}

const TableRow = ({
    children,
    active,
    hover,
    className,
    style,
}: TableRowProps): JSX.Element => {
    const classes = clsx(
        className,
        {
          'active': active,
          'hover': hover,
        }
    )

    return (
        <tr
            className={classes}
            style={style}
        >
            {children.map((child) => {
                return (
                    <td>{child}</td>
                )
            })}
        </tr>
    )
}

export default TableRow
