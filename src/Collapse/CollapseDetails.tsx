import React from 'react'

import { classesFn, CollapseProps } from './Collapse'
import { Summary } from './CollapseTitle'

export type DetailsProps = Omit<
  CollapseProps<HTMLDetailsElement>,
  'checkbox' | 'onOpen' | 'onClose' | 'onToggle'
>
const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  (
    { children, icon, open, dataTheme, className, ...props },
    ref
  ): JSX.Element => {
    return (
      <details
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classesFn({ className, icon, open })}
        open={open}
      >
        {children}
      </details>
    )
  }
)

Details.displayName = 'Details'
export default Object.assign(Details, { Title: Summary })
