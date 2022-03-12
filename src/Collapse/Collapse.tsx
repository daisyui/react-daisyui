import React, { LegacyRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import CollapseTitle from './CollapseTitle'
import CollapseContent from './CollapseContent'

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    ref: LegacyRef<HTMLDivElement>
    checkbox?: boolean
    icon?: 'arrow' | 'plus'
    open?: boolean
  }

const Collapse = ({
  children,
  ref,
  checkbox,
  icon,
  open,
  dataTheme,
  className,
  ...props
}: CollapseProps): JSX.Element => {
  const classes = twMerge(
    'collapse',
    className,
    clsx({
      [`collapse-${icon}`]: icon,
      'collapse-open': open === true,
      'collapse-close': open === false,
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
      {checkbox && <input type="checkbox" className="peer" />}
      {children}
    </div>
  )
}

Collapse.Title = CollapseTitle
Collapse.Content = CollapseContent

export default Collapse
