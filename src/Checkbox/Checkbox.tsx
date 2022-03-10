import React from 'react'
import clsx from 'clsx'

import {
    IComponentBaseProps,
    ComponentSize,
} from '../types'

export interface CheckboxProps extends IComponentBaseProps {
    checked?: boolean
    defaultChecked?: boolean
    color?: "primary" | "secondary" | "accent"
    size?: ComponentSize
    disabled?: boolean
}

const Checkbox = ({
    checked,
    defaultChecked = false,
    color,
    size,
    disabled,
    dataTheme,
    className,
    style,
}: CheckboxProps): JSX.Element => {
    const classes = clsx(
        'checkbox',
        className,
        {
        [`checkbox-${size}`]: size,
        [`checkbox-${color}`]: color,
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

export default Checkbox
