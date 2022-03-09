import React, { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface BreadcrumbsProps extends IComponentBaseProps {
  children?: ReactElement<BreadcrumbsItemProps> | ReactElement<BreadcrumbsItemProps>[]
}

const Breadcrumbs = ({
  children,
  dataTheme,
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
      data-theme={dataTheme}
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
