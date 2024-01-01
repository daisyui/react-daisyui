import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'
import ChatBubble, { ChatBubbleProps } from '.'

const meta: Meta = {
  title: 'Data Display/Chat Bubble',
  component: ChatBubble,
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

interface DefaultControls {
  header: boolean
  time: boolean
  avatar: boolean
  footer: boolean
  side: 'start' | 'end'
}

export const Default: Story<DefaultControls> = ({
  header,
  time,
  avatar,
  footer,
  side,
}) => {
  return (
    <ChatBubble end={side === 'end' ? true : false}>
      {header && (
        <ChatBubble.Header>
          Obi-Wan Kenobi{' '}
          {time && <ChatBubble.Time>2 hours ago</ChatBubble.Time>}
        </ChatBubble.Header>
      )}
      {avatar && (
        <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      )}
      <ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
      {footer && <ChatBubble.Footer>Seen</ChatBubble.Footer>}
    </ChatBubble>
  )
}
Default.args = {
  header: false,
  time: false,
  avatar: false,
  footer: false,
  side: 'start',
}
Default.argTypes = {
  side: {
    options: ['start', 'end'],
    control: { type: 'radio' },
  },
}
Default.parameters = { controls: { exclude: ['end', 'dataTheme'] } }

export const Side: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Message>
        It's over Anakin, <br />I have the high ground.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message>You underestimate my power!</ChatBubble.Message>
    </ChatBubble>
  </>
)

export const WithImage: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>
        It was said that you would, destroy the Sith, not join them.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>
        It was you who would bring balance to the Force
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>Not leave it in Darkness</ChatBubble.Message>
    </ChatBubble>
  </>
)

export const WithHeader: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
    </ChatBubble>
  </>
)

export const WithFooter: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>
)

export const WithHeaderAndFooter: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>
)

export const Colors: Story<ChatBubbleProps> = (args) => (
  <>
    <ChatBubble>
      <ChatBubble.Message color="primary">
        What kind of nonsense is this
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Message color="secondary">
        Put me on the Council and not make me a Master!??
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Message color="accent">
        That's never been done in the history of the Jedi. It's insulting!
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="info">Calm down, Anakin.</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="success">
        You have been given a great honor.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="warning">
        To be on the Council at your age.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="error">
        It's never happened before.
      </ChatBubble.Message>
    </ChatBubble>
  </>
)
