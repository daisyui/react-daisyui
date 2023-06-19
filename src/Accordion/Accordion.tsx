import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import CollapseTitle from '../Collapse/CollapseTitle'
import CollapseContent from '../Collapse/CollapseContent'

export type AccordionProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'type'
> &
  IComponentBaseProps & {
    name?: string
    icon?: 'arrow' | 'plus'
  }

const Accordion = forwardRef<HTMLInputElement, AccordionProps>(
  (
    { name = 'accordion', icon, dataTheme, className, children, ...props },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'collapse',
      clsx({
        'collapse-arrow': icon === 'arrow',
        'collapse-plus': icon === 'plus',
      }),
      className
    )

    return (
      <div data-theme={dataTheme} className={classes}>
        <input {...props} ref={ref} type="radio" name={name} />
        {children}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'

export default Object.assign(Accordion, {
  Title: CollapseTitle,
  Content: CollapseContent,
})
