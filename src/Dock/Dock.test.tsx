import { render, screen } from '@testing-library/react'
import Dock from './'

describe('Dock', () => {
  it('Should render Dock', () => {
    render(<Dock />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('Should render with custom size', () => {
    render(<Dock size="lg" />)
    expect(screen.getByRole('navigation')).toHaveClass('dock-lg')
  })

  it('Should apply additional class names', () => {
    render(<Dock className="my-class" />)
    expect(screen.getByRole('navigation')).toHaveClass('dock', 'my-class')
  })

  it('Should render children', () => {
    render(
      <Dock>
        <Dock.Item>Item 1</Dock.Item>
        <Dock.Item>Item 2</Dock.Item>
        <Dock.Item>Item 3</Dock.Item>
      </Dock>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('Should apply active styles to child element with active class', () => {
    render(
      <Dock>
        <Dock.Item active>Tab 1</Dock.Item>
        <Dock.Item>Tab 2</Dock.Item>
        <Dock.Item>Tab 3</Dock.Item>
      </Dock>
    )
    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')
    const tab3 = screen.getByText('Tab 3')

    expect(tab1).toHaveClass('active')
    expect(tab2).not.toHaveClass('active')
    expect(tab3).not.toHaveClass('active')
  })

  it('Should apply disabled styles to child element with disabled class', () => {
    render(
      <Dock>
        <Dock.Item disabled>Tab 1</Dock.Item>
        <Dock.Item>Tab 2</Dock.Item>
        <Dock.Item>Tab 3</Dock.Item>
      </Dock>
    )
    const tab1 = screen.getByText('Tab 1')
    const tab2 = screen.getByText('Tab 2')
    const tab3 = screen.getByText('Tab 3')

    expect(tab1).toHaveClass('disabled')
    expect(tab2).not.toHaveClass('disabled')
    expect(tab3).not.toHaveClass('disabled')
  })

  it('Should render Label with correct class name', () => {
    render(
      <Dock>
        <Dock.Item>
          <Dock.Label className="my-class">Tab 1</Dock.Label>
        </Dock.Item>
      </Dock>
    )
    expect(screen.getByText('Tab 1')).toHaveClass('dock-label', 'my-class')
  })
})
