import React, { ReactNode } from 'react'

export type TableHeadProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ReactNode[]
  }

const TableHead = ({ children, ...props }: TableHeadProps): JSX.Element => {
  return (
    <thead {...props}>
      <tr>
        {children?.map((child) => {
          return <th>{child}</th>
        })}
      </tr>
    </thead>
  )
}

export default TableHead
