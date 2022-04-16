import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    side: ReactNode
    id: string
    open?: boolean
    mobile?: boolean
    end?: boolean
  }

const Drawer = ({
  children,
  side,
  open,
  mobile,
  end,
  id,
  dataTheme,
  className,
  ...props
}: DrawerProps) => {
  const classes = twMerge(
    'drawer',
    className,
    clsx({
      'drawer-mobile': mobile,
      'drawer-end': end,
    })
  )

  return (
    <div
      aria-expanded={open}
      {...props}
      data-theme={dataTheme}
      className={classes}
    >
      <input id={id} type="checkbox" className="drawer-toggle" checked={open} />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor={id} className="drawer-overlay"></label>
        {side}
      </div>
    </div>
  )
}

export default Drawer
