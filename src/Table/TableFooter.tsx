import React, { ReactElement } from 'react'

import { IComponentBaseProps } from '../types'

export type TableFooterProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> &
    IComponentBaseProps & {
      children?: ReactElement[]
    }

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <tfoot {...props} ref={ref}>
        <tr>
          {children?.map((child) => {
            return <th>{child}</th>
          })}
        </tr>
      </tfoot>
    )
  }
)

export default TableFooter
