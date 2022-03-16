import React, { ReactNode } from 'react'

export type TableHeadProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ReactNode[]
  }

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <thead {...props} ref={ref}>
        <tr>
          {children?.map((child) => {
            return <th>{child}</th>
          })}
        </tr>
      </thead>
    )
  }
)
export default TableHead
