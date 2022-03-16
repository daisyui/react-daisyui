import React from 'react'

export interface CollapseContextInterface {
  isOpen?: boolean
  onClick: React.MouseEventHandler
  customIcon?: React.ReactNode
  setOpen: () => void
  setClosed: () => void
}

export const CollapseContext =
  React.createContext<CollapseContextInterface | null>(null)
