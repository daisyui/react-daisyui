import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type CollapseTitleProps<T extends HTMLElement = HTMLDivElement> =
  React.HTMLAttributes<T> & IComponentBaseProps

const classesFn = ({ className }: Pick<CollapseTitleProps, 'className'>) =>
  twMerge('collapse-title', className)

const CollapseTitle = ({
  children,
  className,
  ...props
}: CollapseTitleProps): JSX.Element => {
  return (
    <div {...props} className={classesFn({ className })}>
      {children}
    </div>
  )
}

export type SummaryProps = CollapseTitleProps<HTMLElement>
export const Summary = React.forwardRef<HTMLElement, SummaryProps>(
  ({ children, className }, ref): JSX.Element => {
    return (
      <summary ref={ref} className={classesFn({ className })}>
        {children}
      </summary>
    )
  }
)

export default CollapseTitle
