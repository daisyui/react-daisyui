import { useContext, useState } from 'react'
import { IComponentBaseProps } from '../types'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return { theme: context.theme, setTheme: context.setTheme }
}
