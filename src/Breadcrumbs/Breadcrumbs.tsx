import React, {
  LegacyRef,
  ReactElement,
} from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import BreadcrumbsItem, { BreadcrumbsItemProps } from './BreadcrumbsItem'

export type BreadcrumbsProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    children?: ReactElement<BreadcrumbsItemProps> | ReactElement<BreadcrumbsItemProps>[]
    ref?: LegacyRef<HTMLDivElement>
}

const Breadcrumbs = ({
  children,
  ref,
  dataTheme,
  className,
  ...props
}: BreadcrumbsProps): JSX.Element => {
  const classes = twMerge(
    'breadcrumbs',
    'text-sm',
    className,
  )

  return (
    <div
      {...props}
      ref={ref}
      data-theme={dataTheme}
      className={classes}
    >
      <ul>
        {children}
      </ul>
    </div>
  )
}

Breadcrumbs.Item = BreadcrumbsItem

export default Breadcrumbs
