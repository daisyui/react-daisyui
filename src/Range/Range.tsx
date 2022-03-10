import React from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentSize,
} from '../types'

export interface RangeProps extends IComponentBaseProps {
    value: number
    min?: number
    max?: number
    color?: "primary" | "secondary" | "accent"
    size?: ComponentSize
    disabled?: boolean
}

const Range = ({
    value,
    min = 0,
    max = 100,
    color,
    size,
    disabled,
    dataTheme,
    className,
    style,
}: RangeProps): JSX.Element => {
    const classes = clsx(
        'range',
        className,
        {
        [`range-${size}`]: size,
        [`range-${color}`]: color,
        }
    )

    return (
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            data-theme={dataTheme}
            className={classes}
            style={style}
            disabled={disabled}
        />
    )
}

export default Range
