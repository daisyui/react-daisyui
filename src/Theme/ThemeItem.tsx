import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type ThemeItemProps = React.HTMLAttributes<HTMLDivElement> & {
  dataTheme: string
  selected?: boolean
}

const ThemeItem = ({
  selected,
  children,
  dataTheme,
  className,
  ...props
}: ThemeItemProps) => {
  const classes = twMerge(
    className,
    'border-base-content/20 hover:border-base-content/40 outline-base-content\
        overflow-hidden rounded-lg border outline-2 outline-offset-2',
    clsx({
      outline: selected,
    })
  )

  return (
    <div {...props} data-theme={dataTheme} className={classes}>
      <div className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="bg-base-200 col-start-1 row-span-2 row-start-1" />
          <div className="bg-base-300 col-start-1 row-start-3" />
          <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
            <div className="font-bold">{dataTheme}</div>
            <div className="flex flex-wrap gap-1">
              <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-primary-content text-sm font-bold">A</div>
              </div>

              <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-primary-content text-sm font-bold">A</div>
              </div>

              <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-primary-content text-sm font-bold">A</div>
              </div>

              <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                <div className="text-primary-content text-sm font-bold">A</div>
              </div>
            </div>
            {children && <div className="my-2">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeItem
