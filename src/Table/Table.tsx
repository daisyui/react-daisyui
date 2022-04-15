import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  IComponentBaseProps & {
    compact?: boolean
    zebra?: boolean
  }

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { children, compact, zebra, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'table',
      className,
      clsx({
        'table-zebra': zebra,
        'table-compact': compact,
      })
    )

    return (
      <table {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </table>
    )
  }
)

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter,
})
