import React from 'react'
import { Story, Meta } from '@storybook/react'

import Theme, { ThemeProps } from '.'
import ThemeItem from './ThemeItem'

import { DEFAULT_THEMES } from '../defaultThemes'
import { useTheme } from './useTheme'

export default {
  title: 'Utils/Theme',
  component: Theme,
} as Meta

export const Default: Story<ThemeProps> = (args) => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-wrap gap-4">
        {DEFAULT_THEMES.map((t, i) => (
          <ThemeItem
            key={`theme_${t}_#${i}`}
            dataTheme={t}
            role="button"
            aria-label="Theme select"
            aria-pressed={t === theme}
            selected={t === theme}
            tabIndex={0}
            onClick={() => {
              document
                .getElementsByTagName('html')[0]
                .setAttribute('data-theme', t)
              window.localStorage.setItem('sb-react-daisyui-preview-theme', t)
              setTheme(t)
            }}
          />
        ))}
      </div>
    </div>
  )
}
Default.args = {}

export const NestedThemes: Story<ThemeProps> = (args) => {
  const { theme, setTheme } = useTheme()

  const renderNestedThemes = (themes: readonly string[]) => {
    const nodes: React.ReactNode[] = []

    for (let i = 0; i < themes.length; i += 2) {
      nodes.push(
        <ThemeItem
          key={`theme_${themes[i]}_#${i}`}
          dataTheme={themes[i]}
          role="button"
          aria-label="Theme select"
          aria-pressed={themes[i] === theme}
          selected={themes[i] === theme}
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation()

            document
              .getElementsByTagName('html')[0]
              .setAttribute('data-theme', themes[i])
            window.localStorage.setItem(
              'sb-react-daisyui-preview-theme',
              themes[i]
            )
            setTheme(themes[i])
          }}
        >
          <ThemeItem
            key={`theme_${themes[i + 1]}_#${i + 1}`}
            dataTheme={themes[i + 1]}
            role="button"
            aria-label="Theme select"
            aria-pressed={themes[i + 1] === theme}
            selected={themes[i + 1] === theme}
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation()

              document
                .getElementsByTagName('html')[0]
                .setAttribute('data-theme', themes[i + 1])
              window.localStorage.setItem(
                'sb-react-daisyui-preview-theme',
                themes[i + 1]
              )
              setTheme(themes[i + 1])
            }}
          />
        </ThemeItem>
      )
    }

    return <div className="flex flex-wrap gap-4">{nodes}</div>
  }

  return (
    <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-col gap-y-4">
        {renderNestedThemes(DEFAULT_THEMES)}
      </div>
    </div>
  )
}
NestedThemes.args = {}
