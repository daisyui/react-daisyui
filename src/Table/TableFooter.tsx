import React, { ReactElement } from 'react'

import { IComponentBaseProps } from '../types'

export type TableFooterProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> &
    IComponentBaseProps & {
      children?: ReactElement[]
      noCell?: boolean // don't wrap children in th/td, should pass children as th/tds manually
    }

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, noCell = false, ...props }, ref): JSX.Element => {
    const renderChildren = noCell
      ? children
      : children?.map((child, i) =>
          i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>
        )

    return (
      <tfoot {...props} ref={ref}>
        <tr>{renderChildren}</tr>
      </tfoot>
    )
  }
)

export default TableFooter
