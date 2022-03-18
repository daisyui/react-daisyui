import React from 'react'

import Theme from '../Theme'
import { useGlobalTheme } from '../../.storybook/theming/useGlobalTheme'

import './styles/docs.css'

export const DocsWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useGlobalTheme()
  return <Theme dataTheme={theme}>{children}</Theme>
}
