import React, { ReactNode } from 'react'
import clsx from 'clsx'

export type BreadcrumbsProps = {
  children?: ReactNode | ReactNode[]
  className?: string
  style?: Record<string, string | number>
}

const Breadcrumbs = ({
  children,
  className,
  style,
}: BreadcrumbsProps): JSX.Element => {
  const classes = clsx(
    'breadcrumbs',
    'text-sm',
    className,
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <ul>
        {children}
      </ul>
    </div>
  )
}

type BreadcrumbsItemProps = {
  children?: ReactNode | ReactNode[]
  href?: string
  className?: string
  style?: Record<string, string | number>
}

const BreadcrumbsItem = ({
  children,
  href,
  className,
  style,
}: BreadcrumbsItemProps): JSX.Element => {
  return (
    <li
      className={className}
      style={style}
    >
      {href ?
        (
          <a href={href}>
            {children}
          </a>
        ) :
        (
          <>
            {children}
          </>
        )}
    </li>
  )
}

Breadcrumbs.Item = BreadcrumbsItem

export default Breadcrumbs