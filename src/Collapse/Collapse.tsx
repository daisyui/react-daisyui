import React, { useState } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import CollapseTitle from './CollapseTitle'
import CollapseContent from './CollapseContent'
import { CollapseContext } from './CollapseContext'

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    icon?: 'arrow' | 'plus' | React.ReactNode
    open?: boolean
    focusOpens?: boolean
    blurCloses?: boolean
    clickOpens?: boolean
    clickCloses?: boolean
    forceOpen?: boolean
    forceClose?: boolean
    tabIndex?: number
    onOpen?: () => void
    onClose?: () => void
  }

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      children,
      icon,
      open,
      forceOpen,
      forceClose,
      tabIndex = 0,
      clickOpens = true,
      clickCloses = true,
      focusOpens = true,
      blurCloses = false,
      dataTheme,
      className,
      onOpen,
      onClose,
      ...props
    },
    ref
  ): JSX.Element => {
    if (forceOpen && forceClose) {
      throw new Error(
        'Collapse component cannot have both forceOpen and forceClose props set to true.'
      )
    }

    // Create ref or use provided ref
    const elRef = React.useRef<HTMLDivElement>(
      (ref as React.MutableRefObject<HTMLDivElement>)?.current
    )

    const [stateIsOpen, setStateIsOpen] = useState(
      !forceClose && (forceOpen || open)
    )

    const handleFocus = () => {
      if (focusOpens) {
        setOpen()
      }
    }

    const handleBlur = () => {
      if (blurCloses) {
        setClosed()
      }
    }

    const handleClick: React.MouseEventHandler = () => {
      if (stateIsOpen && clickCloses) {
        setClosed()
      } else if (!stateIsOpen && clickOpens) {
        setOpen()
      }
    }

    const setOpen = () => {
      if (!forceClose && !stateIsOpen) {
        setStateIsOpen(true)
        onOpen && onOpen()

        elRef.current?.focus()
      }
    }

    const setClosed = () => {
      if (!forceOpen && stateIsOpen) {
        setStateIsOpen(false)
        onClose && onClose()
      }
    }

    // Prevent bug where a click also causes a focus, and opens and immediately shuts
    // Focus is added in handleClick above
    const handleMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault()
    }

    const classes = twMerge(
      'collapse',
      className,
      clsx(
        typeof icon === 'string' && `collapse-${icon}`,
        stateIsOpen ? 'collapse-open' : 'collapse-close'
      )
    )

    return (
      <CollapseContext.Provider
        value={{
          setOpen,
          setClosed,
          isOpen: stateIsOpen,
          onClick: handleClick,
          ...(typeof icon !== 'string' && { customIcon: icon }),
        }}
      >
        <div
          {...props}
          data-theme={dataTheme}
          className={classes}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={handleMouseDown}
          tabIndex={tabIndex}
          ref={elRef}
        >
          {children}
        </div>
      </CollapseContext.Provider>
    )
  }
)

export default Object.assign(Collapse, {
  Title: CollapseTitle,
  Content: CollapseContent,
})
