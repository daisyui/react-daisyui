import React from 'react'

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <tbody {...props} ref={ref}>
        {children}
      </tbody>
    )
  }
)
export default TableBody
