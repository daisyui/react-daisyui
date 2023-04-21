import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'
import StatSection, { StatSectionProps } from './StatSection'

export type StatProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge('stat', className)

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref} />
    )
  }
)

const StatTitle = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} section="title" ref={ref} />)

const StatValue = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} section="value" ref={ref} />)

const StatDesc = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} section="desc" ref={ref} />)

const StatFigure = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} section="figure" ref={ref} />)

const StatActions = React.forwardRef<
  HTMLDivElement,
  Omit<StatSectionProps, 'section'>
>((props, ref) => <StatSection {...props} section="actions" ref={ref} />)

export default Object.assign(Stat, {
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
})
