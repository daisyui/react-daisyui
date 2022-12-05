import React from 'react'

import Button from '../../../src/Button'
import CodeMockup from '../../../src/CodeMockup'
import Hero from '../../../src/Hero'
import Link from '../../../src/Link'
import Tooltip from '../../../src/Tooltip'

import { DocsWrapper } from '../DocsWrapper'
import { CopyButton } from '../components/CopyButton'

import '../styles/welcome.css'

const githubMark = (
  <svg
    aria-hidden="true"
    className="octicon octicon-mark-github fill-current"
    height="24"
    version="1.1"
    viewBox="0 0 16 16"
    width="24"
  >
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
)

const checkMark = (
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-6 w-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
)

export const HomePage = () => {
  const bulletPoints = [
    'React components',
    'Faster development',
    'Cleaner JSX/TSX',
    'Customizable and themeable',
  ]

  return (
    <DocsWrapper>
      <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20">
        <svg
          className="fill-secondary col-start-1 row-start-1 h-auto w-full"
          width="1600"
          height="595"
          viewBox="0 0 1600 595"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
        </svg>
        <Hero.Content className="col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
          <div className="flex-col gap-10 lg:px-10 lg:pb-32">
            <h1 className="font-title mb-2 py-4 font-extrabold lg:py-10">
              <div className="mb-2 text-5xl lg:text-7xl">react-daisyUI</div>
              <div className="text-2xl lg:text-3xl">
                A React component library for{' '}
                <Link color="info" href="https://daisyui.com/" target="_blank">
                  daisyUI
                </Link>
                , <br />
                the most popular, free and open-source <br />
                Tailwind CSS component library
              </div>
            </h1>
            <div className="flex w-full flex-col items-start space-y-10 lg:flex-row lg:space-x-4 lg:space-y-0">
              <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
                {bulletPoints.map((point, index) => (
                  <div className="flex gap-2" key={`bulletPoint.${index}`}>
                    {checkMark} {point}
                  </div>
                ))}
              </div>

              <CodeMockup className="border-base-content w-full max-w-sm flex-1 border-2 border-opacity-20 bg-transparent pb-6 text-left text-current lg:mx-0">
                <CodeMockup.Line>
                  npm i daisyui react-daisyui{' '}
                  <Tooltip message="Copy">
                    <CopyButton
                      color="ghost"
                      size="xs"
                      text="npm i daisyui react-daisyui"
                    />
                  </Tooltip>
                </CodeMockup.Line>
              </CodeMockup>
            </div>
            <div className="pt-4 flex flex-row gap-2">
              <Button
                active
                startIcon={githubMark}
                size="lg"
                color="ghost"
                href="https://github.com/daisyui/react-daisyui"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                size="lg"
                href="https://www.npmjs.com/package/react-daisyui"
                target="_blank"
              >
                NPM
              </Button>
            </div>
          </div>
        </Hero.Content>
      </div>
    </DocsWrapper>
  )
}
