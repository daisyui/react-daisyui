import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  IComponentBaseProps & {
    compact?: boolean
    zebra?: boolean
  }

const Table = ({
  children,
  compact,
  zebra,
  dataTheme,
  className,
  ...props
}: TableProps): JSX.Element => {
  const classes = twMerge(
    'table',
    className,
    clsx({
      'table-zebra': zebra,
      'table-compact': compact,
    })
  )

  return (
    <table {...props} data-theme={dataTheme} className={classes}>
      {children}
    </table>
  )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow

export default Table
