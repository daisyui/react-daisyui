import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentSize } from '../types'

import TableHead from './TableHead'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableFooter from './TableFooter'

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
  IComponentBaseProps & {
    size?: ComponentSize
    zebra?: boolean
    pinRows?: boolean
    pinCols?: boolean
  }

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    { children, size, zebra, pinRows, pinCols, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'table',
      className,
      clsx({
        'table-zebra': zebra,
        'table-lg': size === 'lg',
        'table-md': size === 'md',
        'table-sm': size === 'sm',
        'table-xs': size === 'xs',
        'table-pin-rows': pinRows,
        'table-pin-cols': pinCols,
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
