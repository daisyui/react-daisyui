import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import StatItem from './StatItem'

export type StatProps = 
    & React.HTMLAttributes<HTMLDivElement>
    & IComponentBaseProps

const Stat = ({
    className,
    ...props
}: StatProps): JSX.Element => {
    const classes = twMerge(
        "stat",
        className,
    )

    return <div {...props} className={classes} />
}

Stat.Item = StatItem

export default Stat
