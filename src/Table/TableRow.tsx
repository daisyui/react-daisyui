import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> &
  IComponentBaseProps & {
    children?: ReactElement[]
    active?: boolean
    hover?: boolean
  }

const TableRow = ({
  children,
  active,
  hover,
  className,
  ...props
}: TableRowProps): JSX.Element => {
  const classes = twMerge(
    className,
    clsx({
      active: active,
      hover: hover,
    })
  )

  return (
    <tr {...props} className={classes}>
      {children?.map((child) => {
        return <td>{child}</td>
      })}
    </tr>
  )
}

export default TableRow
