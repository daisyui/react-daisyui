import React, { ReactNode } from 'react'

export type TableHeadProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ReactNode[]
    noCell?: boolean // don't wrap children in th/td, should pass children as th/tds manually
  }

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, noCell = false, ...props }, ref): JSX.Element => {
    const renderChildren = noCell
      ? children
      : children?.map((child, i) =>
          i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>
        )

    return (
      <thead {...props} ref={ref}>
        <tr>{renderChildren}</tr>
      </thead>
    )
  }
)
export default TableHead
