import React from 'react'

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>

const TableBody = ({
    children,
    ...props
}: TableBodyProps): JSX.Element => {
    return (
        <tbody {...props}>{children}</tbody>
    )
}

export default TableBody
