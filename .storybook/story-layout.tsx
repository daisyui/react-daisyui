import React, { ReactNode, useState } from 'react'

import { DEFAULT_THEMES } from '../src/defaultThemes'

import Navbar from '../src/Navbar'
import Select from '../src/Select'

type Props = {
  children: ReactNode | ReactNode[]
  title?: any
  description?: string
}

const StoryLayout = ({ children, title, description }: Props): JSX.Element => {
  const [dataTheme, setDataTheme] = useState<string>('dark')

  return (
    <div data-theme={dataTheme} className="w-full h-screen p-8 bg-base-100">
      <Navbar className="p-0 border-b border-neutral text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">
            react-daisyui
          </span>
        </Navbar.Start>

        <Navbar.End className="flex gap-x-4">
          theme:
          <Select value={dataTheme} onChange={(theme) => setDataTheme(theme)}>
            {DEFAULT_THEMES.map((theme) => {
              return <Select.Option value={theme}>{theme}</Select.Option>
            })}
          </Select>
        </Navbar.End>
      </Navbar>

      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">{children}</div>
      </div>
    </div>
  )
}

export default StoryLayout
