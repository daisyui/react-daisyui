import React from 'react'
import { render, screen } from '@testing-library/react'
import ChatBubble from './'

describe('ChatBubble', () => {
  test('Should render ChatBubble', () => {
    const { container } = render(<ChatBubble />)
    const chatBubbleDiv = container.querySelector('.chat.chat-start')
    expect(chatBubbleDiv).toBeInTheDocument()
  })

  test('Should render children', () => {
    const { getByText } = render(
      <ChatBubble>
        <span>Test Content</span>
      </ChatBubble>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  test('Should apply correct className based on the "end" prop', () => {
    const { container } = render(<ChatBubble end />)
    expect(container.firstChild).toHaveClass('chat-end')
  })

  it('Should allow passing extra propt', () => {
    render(<ChatBubble data-testid="chat-bubble">Test content</ChatBubble>)
    expect(screen.getByTestId('chat-bubble')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<ChatBubble ref={ref}>Test content</ChatBubble>)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should render ChatBubbleHeader subcomponent', () => {
    const { getByText } = render(
      <ChatBubble.Header>Header Content</ChatBubble.Header>
    )
    expect(getByText('Header Content')).toBeInTheDocument()
  })

  test('Should render ChatBubbleTime subcomponent', () => {
    const { getByText } = render(
      <ChatBubble.Time>Time Content</ChatBubble.Time>
    )
    expect(getByText('Time Content')).toBeInTheDocument()
  })

  test('Should render ChatBubbleAvatar subcomponent', () => {
    const { getByAltText } = render(
      <ChatBubble.Avatar>
        <img src="avatar.jpg" alt="Avatar" />
      </ChatBubble.Avatar>
    )
    expect(getByAltText('Avatar')).toBeInTheDocument()
  })

  test('Should render ChatBubbleMessage subcomponent', () => {
    const { getByText } = render(
      <ChatBubble.Message>Message Content</ChatBubble.Message>
    )
    expect(getByText('Message Content')).toBeInTheDocument()
  })

  test('Should render ChatBubbleFooter subcomponent', () => {
    const { getByText } = render(
      <ChatBubble.Footer>Footer Content</ChatBubble.Footer>
    )
    expect(getByText('Footer Content')).toBeInTheDocument()
  })
})
