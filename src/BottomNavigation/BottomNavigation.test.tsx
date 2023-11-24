import { render, screen } from '@testing-library/react'
import BottomNavigation from './'

describe('BottomNavigation', () => {
  it('Should render BottomNavigation', () => {
    render(<BottomNavigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('Should render with custom size', () => {
    render(<BottomNavigation size="lg" />)
    expect(screen.getByRole('navigation')).toHaveClass('btm-nav-lg')
  })

  it('Should apply additional class names', () => {
    render(<BottomNavigation className="my-class" />)
    expect(screen.getByRole('navigation')).toHaveClass('btm-nav', 'my-class')
  })

  it('Should render children', () => {
    render(
      <BottomNavigation>
        <BottomNavigation.Item>Item 1</BottomNavigation.Item>
        <BottomNavigation.Item>Item 2</BottomNavigation.Item>
        <BottomNavigation.Item>Item 3</BottomNavigation.Item>
      </BottomNavigation>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('Should apply active styles to child element with active class', () => {
    render(
      <BottomNavigation>
        <BottomNavigation.Item active>Tab 1</BottomNavigation.Item>
        <BottomNavigation.Item>Tab 2</BottomNavigation.Item>
        <BottomNavigation.Item>Tab 3</BottomNavigation.Item>
      </BottomNavigation>
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
      <BottomNavigation>
        <BottomNavigation.Item disabled>Tab 1</BottomNavigation.Item>
        <BottomNavigation.Item>Tab 2</BottomNavigation.Item>
        <BottomNavigation.Item>Tab 3</BottomNavigation.Item>
      </BottomNavigation>
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
      <BottomNavigation>
        <BottomNavigation.Item>
          <BottomNavigation.Label className="my-class">
            Tab 1
          </BottomNavigation.Label>
        </BottomNavigation.Item>
      </BottomNavigation>
    )
    expect(screen.getByText('Tab 1')).toHaveClass('btm-nav-label', 'my-class')
  })
})
