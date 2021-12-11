import React, { ReactNode } from 'react'

export type BreadcrumbsProps = {
  children?: ReactNode | ReactNode[]
}

const Breadcrumbs = ({
  children
}: BreadcrumbsProps): JSX.Element => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {children}
      </ul>
    </div>
  )
}

type BreadcrumbsItemProps = {
  children?: ReactNode | ReactNode[]
  href?: string
}

const BreadcrumbsItem = ({
  children,
  href,
}: BreadcrumbsItemProps): JSX.Element => {
  return (
    <li>
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