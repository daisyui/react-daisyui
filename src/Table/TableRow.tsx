import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> &
  IComponentBaseProps & {
    children?: ReactElement[]
    active?: boolean
    hover?: boolean
    noCell?: boolean // don't wrap children in th/td, should pass children as th/tds manually
  }

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { children, active, hover, noCell = false, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        active: active,
        hover: hover,
      })
    )

    const renderChildren = noCell
      ? children
      : children?.map((child, i) =>
          i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>
        )

    return (
      <tr {...props} className={classes} ref={ref}>
        {renderChildren}
      </tr>
    )
  }
)

export default TableRow
