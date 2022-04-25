import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import ModalActions from './ModalActions'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'

export type ModalProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onBlur'> &
  IComponentBaseProps & {
    open?: boolean
    responsive?: boolean
    onBlur?: () => void
  }

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open,
      responsive,
      onBlur,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const containerClasses = twMerge(
      'modal',
      clsx({
        'modal-open': open,
        'modal-bottom sm:modal-middle': responsive,
      })
    )

    const bodyClasses = twMerge('modal-box', className)

    return (
      <div
        aria-label="Modal"
        aria-hidden={!open}
        aria-modal={open}
        data-theme={dataTheme}
        className={containerClasses}
        onClick={(e) => {
          e.stopPropagation()
          if (e.target === e.currentTarget) {
            e.stopPropagation()
            if (onBlur) {
              onBlur()
            }
          }
        }}
      >
        <div
          {...props}
          data-theme={dataTheme}
          className={bodyClasses}
          ref={ref}
        >
          {children}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
})
