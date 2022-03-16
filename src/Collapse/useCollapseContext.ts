import React, { useContext } from 'react'
import { CollapseContext } from './CollapseContext'

export const useCollapseContext = () => {
  return useContext(CollapseContext)
}
