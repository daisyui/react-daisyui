import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type CollapseProps =
    & React.HTMLAttributes<HTMLDivElement>
    & IComponentBaseProps 
    & {
        children?: ReactNode | ReactNode[]
        content?: ReactNode | ReactNode[]
        icon?: 'arrow' | 'plus'
        open?: boolean
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(({
  children,
  content,
  icon,
  open,
  dataTheme,
  className,
  ...props
}, ref): JSX.Element => {
    const classes = twMerge(
        'collapse',
        className,
        clsx({
            [`collapse-${icon}`]: icon,
            'collapse-open': open,
            'collapse-close': !open,
        })
    )

    return (
        <div
            {...props}
            ref={ref}
            tabIndex={0}
            data-theme={dataTheme}
            className={classes}
        >
            <div className="collapse-title">{children}</div>
            <div className="collapse-content">{content}</div>
        </div>
    )
})

Collapse.displayName = "Collapse"

export default Collapse
