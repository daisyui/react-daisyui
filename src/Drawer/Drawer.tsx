import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { IComponentBaseProps } from '../types'

export type DrawerProps =
  & React.HTMLAttributes<HTMLDivElement>
  & IComponentBaseProps
  & {
    id: string
    drawerContent?: ReactNode
    open?: boolean
}

const Drawer = ({
  className,
  id,
  open = false,
  drawerContent,
  ...props
}: DrawerProps) => (
  <div className={clsx('drawer', className)} {...props}>
    <input
      readOnly
      id={id}
      type="checkbox"
      checked={open}
      className="drawer-toggle"
    />

    {drawerContent ? (
      <div className="drawer-content">{drawerContent}</div>
    ) : null}

    <div className="drawer-side">
      <label htmlFor={id} className="drawer-overlay"></label>
      {props.children}
    </div>
  </div>
)

export default Drawer
