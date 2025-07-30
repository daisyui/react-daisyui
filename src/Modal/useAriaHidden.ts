import { useEffect, useState } from 'react'

export const useAriaHidden = (
  ref: React.RefObject<HTMLDialogElement>,
  open?: boolean,
  ariaHidden?: boolean
) => {
  const [iAriaHidden, setIAriaHidden] = useState(ariaHidden ?? !open)

  useEffect(() => {
    setIAriaHidden(ariaHidden ?? !open)
  }, [ariaHidden, open])

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('close', () => {
        setIAriaHidden(true)
      })
    }
  }, [ref.current])

  useEffect(() => {
    if (ref.current) {
      const originalShowModal = ref.current.showModal
      ref.current.showModal = () => {
        originalShowModal.call(ref.current)
        setIAriaHidden(false)
      }
      const originalClose = ref.current.close
      ref.current.close = () => {
        originalClose.call(ref.current)
        setIAriaHidden(true)
      }
    }
  }, [ref.current])

  return iAriaHidden
}
