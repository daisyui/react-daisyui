import { render, screen, fireEvent } from '@testing-library/react'
import Drawer from './'

describe('Drawer component', () => {
  test('Should render Drawer', () => {
    const { container } = render(
      <Drawer side={<div>Side content</div>}>Content</Drawer>
    )

    expect(container).toBeInTheDocument()

    expect(container.querySelector('.drawer')).toBeInTheDocument()
    expect(container.querySelector('.drawer-toggle')).toBeInTheDocument()
    expect(container.querySelector('.drawer-content')).toBeInTheDocument()
    expect(container.querySelector('.drawer-side')).toBeInTheDocument()
    expect(container.querySelector('.drawer-overlay')).toBeInTheDocument()
  })

  test('Should apply toggleClassName to the toggle element', () => {
    render(
      <Drawer side={<div>Side content</div>} toggleClassName="custom-toggle">
        Content
      </Drawer>
    )

    expect(screen.getByRole('checkbox')).toHaveClass('custom-toggle')
  })

  test('Should apply contentClassName to the drawer content element', () => {
    const { container } = render(
      <Drawer side={<div>Side content</div>} contentClassName="custom-content">
        Content
      </Drawer>
    )

    expect(container.getElementsByClassName('drawer-content')[0]).toHaveClass(
      'custom-content'
    )
  })

  test('Should apply sideClassName to the drawer side element', () => {
    const { container } = render(
      <Drawer side={<div>Side content</div>} sideClassName="custom-side">
        Content
      </Drawer>
    )

    expect(container.getElementsByClassName('drawer-side')[0]).toHaveClass(
      'custom-side'
    )
  })

  test('Should apply overlayClassName to the drawer overlay element', () => {
    const { container } = render(
      <Drawer side={<div>Side content</div>} overlayClassName="custom-overlay">
        Content
      </Drawer>
    )

    expect(container.getElementsByClassName('drawer-overlay')[0]).toHaveClass(
      'custom-overlay'
    )
  })

  test('Should open when the toggle is clicked', () => {
    render(<Drawer side={<div>Side content</div>}>Content</Drawer>)

    const toggle = screen.getByRole('checkbox', { name: '' })

    expect(toggle).toBeInTheDocument()

    fireEvent.click(toggle)

    expect((toggle as HTMLInputElement).checked).toBeTruthy()
  })

  test('Should call onClickOverlay when the overlay is clicked', () => {
    const onClickOverlay = jest.fn()
    const { container } = render(
      <Drawer side={<div>Side content</div>} onClickOverlay={onClickOverlay}>
        Content
      </Drawer>
    )

    const overlay = container.querySelector('.drawer-overlay')

    expect(overlay).toBeInTheDocument()

    if (overlay) {
      fireEvent.click(overlay)
      expect(onClickOverlay).toHaveBeenCalledTimes(1)
    }
  })

  test('Should allow passing extra props', () => {
    render(<Drawer side={<div>Side Content</div>} data-testid="drawer" />)
    expect(screen.getByTestId('drawer')).toBeInTheDocument()
  })

  test('Should apply additional class names', () => {
    render(
      <Drawer
        side={<div>Side Content</div>}
        data-testid="drawer"
        className="custom-class"
      />
    )
    const drawerElement = screen.getByTestId('drawer')

    expect(drawerElement).toBeInTheDocument()
    expect(drawerElement).toHaveClass('drawer', 'custom-class')
  })
})
