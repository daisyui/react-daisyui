import React, { useEffect, useState } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

import { useGlobalTheme } from './theming'

import Navbar from '../src/Navbar'
import Tabs from '../src/Tabs'
import CodeMockup from '../src/CodeMockup'
import Theme from '../src/Theme'

const StoryLayout = ({ children, title, description, source }) => {
  const [tab, setTab] = useState('preview')
  const globalTheme = useGlobalTheme()

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', globalTheme)
  }, [globalTheme])

  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      <Navbar className="p-0 border-b border-neutral text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">react-daisyui</span>
        </Navbar.Start>
      </Navbar>

      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          <div className='grid'>
            <Tabs
              className='z-10 -mb-px'
              variant='lifted'
              value={tab}
              onChange={(t) => setTab(t)}
            >
              <Tabs.Tab value="preview" className="[--tab-bg:hsl(var(--b2))]">
                Preview
              </Tabs.Tab> 
              <Tabs.Tab value="html" className={tab === 'html' ? "[--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]" : ""}>
                HTML
              </Tabs.Tab> 
              <Tabs.Tab value="html" className="mr-6 flex-1 cursor-default [--tab-border-color:transparent]" /> 
            </Tabs>
            <div className='rounded-b-box rounded-tr-box relative overflow-x-auto'>
              {tab === 'preview' ? (
                <div
                  className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box
                            flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                            overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4"
                  style={{ backgroundSize: '5px 5px' }}
                >
                  {children}
                </div>
              ) : (
                <CodeMockup className="w-full mb-8">
                  <Highlight {...defaultProps} theme={theme} code={source} language="jsx">
                  {({ tokens, getLineProps, getTokenProps }) => (
                    <pre slot="html">
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                  </Highlight>
                </CodeMockup>
              )}
            </div>
          </div>
        </div>
      </div>
    </Theme>
  )
}

export default StoryLayout
