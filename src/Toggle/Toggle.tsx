import React from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentSize,
} from '../types'

export interface ToggleProps extends IComponentBaseProps {
    checked?: boolean
    defaultChecked?: boolean
    color?: "primary" | "secondary" | "accent"
    size?: ComponentSize
    disabled?: boolean
}

const Toggle = ({
    checked,
    defaultChecked = false,
    color,
    size,
    disabled,
    dataTheme,
    className,
    style,
}: ToggleProps): JSX.Element => {
    const classes = clsx(
        'toggle',
        className,
        {
        [`toggle-${size}`]: size,
        [`toggle-${color}`]: color,
        }
    )

    return (
        <input
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            data-theme={dataTheme}
            className={classes}
            style={style}
            disabled={disabled}
        />
    )
}

export default Toggle
