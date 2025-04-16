import React, { forwardRef, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentPosition } from '../types'

import ModalActions from './ModalActions'
import ModalBody from './ModalBody'
import ModalHeader from './ModalHeader'
import ModalLegacy from './ModalLegacy'

export type ModalProps = React.DialogHTMLAttributes<HTMLDialogElement> &
  IComponentBaseProps & {
    open?: boolean
    position?: Exclude<ComponentPosition, 'left' | 'right'>
    responsive?: boolean
    backdrop?: boolean
    ariaHidden?: boolean
  }

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      children,
      open,
      position,
      responsive,
      backdrop,
      ariaHidden,
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
        'modal-end': position === 'end',
        'modal-start': position === 'start',
        'modal-top': position === 'top',
        'modal-middle': position === 'middle',
        'modal-bottom': position === 'bottom',
        'modal-bottom sm:modal-middle': responsive,
      })
    )

    ariaHidden = ariaHidden ?? !open
    const bodyClasses = twMerge('modal-box', className)

    return (
      <dialog
        {...props}
        aria-label="Modal"
        aria-hidden={ariaHidden}
        open={open}
        aria-modal={open}
        data-theme={dataTheme}
        className={containerClasses}
        ref={ref}
      >
        <div data-theme={dataTheme} className={bodyClasses}>
          {children}
        </div>
        {backdrop && (
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        )}
      </dialog>
    )
  }
)

Modal.displayName = 'Modal'

export type DialogProps = Omit<ModalProps, 'ref'>
const useDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleShow = useCallback(() => {
    dialogRef.current?.showModal()
  }, [dialogRef])

  const handleHide = useCallback(() => {
    dialogRef.current?.close()
  }, [dialogRef])

  const Dialog = ({ children, ...props }: DialogProps) => {
    return (
      <Modal {...props} ref={dialogRef}>
        {children}
      </Modal>
    )
  }
  Dialog.displayName = 'Dialog'
  return { dialogRef, Dialog, handleShow, handleHide }
}
export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Actions: ModalActions,
  Legacy: ModalLegacy,
  useDialog,
})
