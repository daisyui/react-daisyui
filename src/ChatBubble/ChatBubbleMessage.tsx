import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ComponentColor, IComponentBaseProps } from '../types'

export type ChatBubbleMessageProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    color?: ComponentColor
  }

const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(({ color, className, ...props }, ref) => {
  const classes = twMerge(
    'chat-bubble',
    clsx({
      'chat-bubble-primary': color === 'primary',
      'chat-bubble-secondary': color === 'secondary',
      'chat-bubble-accent': color === 'accent',
      'chat-bubble-info': color === 'info',
      'chat-bubble-success': color === 'success',
      'chat-bubble-warning': color === 'warning',
      'chat-bubble-error': color === 'error',
    }),
    className
  )

  return <div {...props} className={classes} ref={ref} />
})

export default ChatBubbleMessage
