import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { Button } from '..'

export type ModalProps = {
  children?: ReactNode | ReactNode[]
  open?: boolean
  title?: string
  footer?: boolean
  acceptText?: string
  cancelText?: string
  onAccept?: () => void
  onCancel?: () => void
  className?: string
  style?: Record<string, string | number>
}

const Modal = ({
  children,
  open,
  title,
  footer,
  acceptText = 'Accept',
  cancelText = 'Close',
  onAccept,
  onCancel,
  className,
  style,
}: ModalProps): JSX.Element => {
  const classes = clsx(
    'modal',
    className,
    {
      'modal-open': open,
    }
  )

  return (
    <div
      className={classes}
      style={style}
    >
      <div className="modal-box">
        {title ?
          (
            <div
              className="w-full mb-8 text-xl"
            >
              {title}
            </div>
          )
        : null}

        <div>{children}</div>

        {footer ? 
          (
            <div className="modal-action">
              <Button
                onClick={onAccept}
                color="primary"
              >
                {acceptText}
              </Button>
              <Button
                onClick={onCancel}
              >
                {cancelText}
              </Button>
            </div>
          )
        : null}

      </div>
    </div>
  )
}

export default Modal