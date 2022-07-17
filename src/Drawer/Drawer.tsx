import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    side: ReactNode
    open?: boolean
    mobile?: boolean
    end?: boolean
    onClickOverlay?: () => void
  }

const Drawer = ({
  children,
  side,
  open,
  mobile,
  end,
  dataTheme,
  className,
  onClickOverlay,
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
      <input type="checkbox" className="drawer-toggle" checked={open} readOnly />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label className="drawer-overlay" onClick={onClickOverlay}></label>
        {side}
      </div>
    </div>
  )
}

export default Drawer
