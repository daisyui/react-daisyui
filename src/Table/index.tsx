import React, {
    ReactElement,
    ReactNode
} from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface TableProps extends IComponentBaseProps {
  children?: ReactNode | ReactNode[]
  compact?: boolean
  zebra?: boolean
}

const Table = ({
  children,
  compact,
  zebra,
  dataTheme,
  className,
  style,
}: TableProps): JSX.Element => {
  const classes = clsx(
    'table',
    className,
    {
      'table-zebra': zebra,
      'table-compact': compact,
    }
  )

  return (
    <table
      data-theme={dataTheme}
      className={classes}
      style={style}
    >
      {children}
    </table>
  )
}

export interface HeadProps extends IComponentBaseProps {
    children: ReactNode[]
}

const Head = ({
    children,
    className,
    style,
}: HeadProps): JSX.Element => {
    return (
        <thead
            className={className}
            style={style}
        >
            <tr>
                {children.map((child) => {
                    return (
                        <th>{child}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

export interface BodyProps extends IComponentBaseProps {
    children: ReactNode[]
}

const Body = ({
    children,
}: BodyProps): JSX.Element => {
    return (
        <tbody>{children}</tbody>
    )
}

export interface RowProps extends IComponentBaseProps {
    children: ReactElement[]
    active?: boolean
    hover?: boolean
}

const Row = ({
    children,
    active,
    hover,
    className,
    style,
}: RowProps): JSX.Element => {
    const classes = clsx(
        className,
        {
          'active': active,
          'hover': hover,
        }
    )

    return (
        <tr
            className={classes}
            style={style}
        >
            {children.map((child) => {
                return (
                    <td>{child}</td>
                )
            })}
        </tr>
    )
}

Table.Head = Head
Table.Body = Body
Table.Row = Row

export default Table
