import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export interface CollapseProps extends IComponentBaseProps {
    children?: ReactNode | ReactNode[]
    content?: ReactNode | ReactNode[]
    icon?: 'arrow' | 'plus'
    open?: boolean
}

const Collapse = ({
  children,
  content,
  icon,
  open,
  dataTheme,
  className,
  style,
}: CollapseProps): JSX.Element => {
    const classes = clsx(
        'collapse',
        className,
        {
            [`collapse-${icon}`]: icon,
            'collapse-open': open,
            'collapse-close': !open,
        }
    )

    return (
        <div
            tabIndex={0}
            data-theme={dataTheme}
            className={classes}
            style={style}
        >
            <div className="collapse-title">{children}</div>
            <div className="collapse-content">{content}</div>
        </div>
    )
}

export default Collapse
