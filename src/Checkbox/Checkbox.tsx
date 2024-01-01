import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
} from '../types'

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  IComponentBaseProps & {
    color?: Exclude<ComponentColor, 'ghost'>
    size?: ComponentSize
    indeterminate?: boolean
  }

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color,
      size,
      indeterminate,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'checkbox',
      className,
      clsx({
        'checkbox-lg': size === 'lg',
        'checkbox-md': size === 'md',
        'checkbox-sm': size === 'sm',
        'checkbox-xs': size === 'xs',
        'checkbox-primary': color === 'primary',
        'checkbox-secondary': color === 'secondary',
        'checkbox-accent': color === 'accent',
        'checkbox-info': color === 'info',
        'checkbox-success': color === 'success',
        'checkbox-warning': color === 'warning',
        'checkbox-error': color === 'error',
      })
    )

    const checkboxRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

    useEffect(() => {
      if (!checkboxRef.current) {
        return
      }

      if (indeterminate) {
        checkboxRef.current.indeterminate = true
      } else {
        checkboxRef.current.indeterminate = false
      }
    }, [indeterminate])

    return (
      <input
        {...props}
        ref={checkboxRef}
        type="checkbox"
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
