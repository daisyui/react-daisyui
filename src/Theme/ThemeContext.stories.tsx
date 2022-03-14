import React, { useContext, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Theme, { ThemeProps } from '.'
import Button from '../Button'
import { DEFAULT_THEMES } from '../defaultThemes'
import { toTitleCase } from '../utils'
import Select from '../Select'
import { useTheme } from './useTheme'
import { ThemeContext } from './ThemeContext'
import { DataTheme } from '../types'

export default {
  title: 'Utils/ThemeContextTest',
  component: Theme,
} as Meta

const ThemePicker = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Select value={theme} onChange={setTheme}>
      {DEFAULT_THEMES.map((theme) => {
        return <Select.Option value={theme}>{theme}</Select.Option>
      })}
    </Select>
  )
}

const ThemeName = () => {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <h2>Selected theme: {theme}</h2>
    </>
  )
}

export const Default: Story<ThemeProps> = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Theme>
        <ThemeName />
        <ThemePicker />
      </Theme>
    </div>
  )
}

export const CustomOnChange: Story<ThemeProps> = () => {
  const handleThemeChange = (theme: DataTheme) => {
    alert(`Theme changed to ${theme}!`)
  }
  return (
    <div className="flex flex-col gap-y-4">
      <Theme onChange={handleThemeChange}>
        <ThemeName />
        <ThemePicker />
      </Theme>
    </div>
  )
}
CustomOnChange.storyName = 'Custom onChange function'
