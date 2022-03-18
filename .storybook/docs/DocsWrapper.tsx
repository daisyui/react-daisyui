import React from 'react'

import Theme from '../../src/Theme'
import { useGlobalTheme } from '../../.storybook/theming/useGlobalTheme'

export const DocsWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useGlobalTheme()
  return <Theme dataTheme={theme}>{children}</Theme>
}
