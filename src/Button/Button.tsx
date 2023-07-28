import React, { forwardRef, ReactNode, ElementType } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import Loading from '../Loading'
import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

type ITagProps = {
  a: {
    attr: React.AnchorHTMLAttributes<HTMLAnchorElement>
    ele: HTMLAnchorElement
  }
  button: {
    attr: React.ButtonHTMLAttributes<HTMLButtonElement>
    ele: HTMLButtonElement
  }
  div: {
    attr: React.HTMLAttributes<HTMLDivElement>
    ele: HTMLDivElement
  }
  img: {
    attr: React.ImgHTMLAttributes<HTMLImageElement>
    ele: HTMLImageElement
  }
  input: {
    attr: React.InputHTMLAttributes<HTMLInputElement>
    ele: HTMLInputElement
  }
  label: {
    attr: React.LabelHTMLAttributes<HTMLLabelElement>
    ele: HTMLLabelElement
  }
  span: {
    attr: React.HTMLAttributes<HTMLSpanElement>
    ele: HTMLSpanElement
  }
}

type GetTagProps<T extends ElementType> = T extends keyof ITagProps
  ? ITagProps[T]
  : ITagProps['button']

export type ButtonProps<
  T extends ElementType = 'button',
  A extends React.HTMLAttributes<HTMLElement> = GetTagProps<T>['attr']
> = Omit<A, 'color' | 'size'> &
  IComponentBaseProps & {
    shape?: ComponentShape
    size?: ComponentSize
    variant?: 'outline' | 'link'
    color?: ComponentColor
    glass?: boolean
    wide?: boolean
    fullWidth?: boolean
    responsive?: boolean
    animation?: boolean
    loading?: boolean
    active?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
    disabled?: boolean
    tag?: T
  }
//  https://developer.mozilla.org/en-US/docs/Glossary/Void_element
const VoidElementList: ElementType[] = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'keygen',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      variant,
      color,
      glass,
      startIcon,
      endIcon,
      wide,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      tag = 'button',
      ...props
    },
    ref
  ): JSX.Element => {
    const Tag = tag
    const classes = twMerge(
      'btn',
      className,
      clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
        'btn-lg': size === 'lg',
        'btn-md': size === 'md',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs',
        'btn-circle': shape === 'circle',
        'btn-square': shape === 'square',
        'btn-outline': variant === 'outline',
        'btn-link': variant === 'link',
        'btn-neutral': color === 'neutral',
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',
        'btn-ghost': color === 'ghost',
        glass: glass,
        'btn-wide': wide,
        'btn-block': fullWidth,
        'btn-xs sm:btn-sm md:btn-md lg:btn-lg': responsive,
        'no-animation': !animation,
        'btn-active': active,
        'btn-disabled': disabled,
      })
    )
    if (VoidElementList.includes(Tag)) {
      return (
        <Tag
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        />
      )
    } else {
      return (
        <Tag
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {loading && <Loading size={size} />}
          {startIcon && !loading && startIcon}
          {children}
          {endIcon && endIcon}
        </Tag>
      )
    }
  }
)

Button.displayName = 'Button'

export default Button as <
  T extends ElementType = 'button',
  E extends HTMLElement = GetTagProps<T>['ele'],
  A extends React.HTMLAttributes<HTMLElement> = GetTagProps<T>['attr']
>(
  props: ButtonProps<T, A> & { ref?: React.Ref<E> }
) => JSX.Element
