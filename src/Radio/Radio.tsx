import React, { forwardRef } from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentSize,
} from '../types'

export type RadioProps =
    & React.InputHTMLAttributes<HTMLInputElement>
    & IComponentBaseProps
    & {
        color?: "primary" | "secondary" | "accent"
        size?: ComponentSize
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({
    color,
    size,
    dataTheme,
    className,
    ...props
}, ref): JSX.Element => {
    const classes = clsx(
        'radio',
        className,
        {
            [`radio-${size}`]: size,
            [`radio-${color}`]: color,
        }
    )

    return (
        <input
            {...props}
            ref={ref}
            type="radio"
            data-theme={dataTheme}
            className={classes}
        />
    )
})

Radio.displayName = "Radio"

export default Radio
