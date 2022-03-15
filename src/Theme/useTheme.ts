import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)
  return { theme: context.theme, setTheme: context.setTheme }
}
