import React from 'react'

import { DataTheme } from '../types'

export interface IThemeContext {
  theme: DataTheme
  setTheme: (theme: DataTheme) => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
})
