import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Collapse from './'

describe('Collapse', () => {
  test('Should render Collapse', () => {
    const { container } = render(<Collapse />)
    const collapseDiv = container.querySelector('.collapse')
    expect(collapseDiv).toBeInTheDocument()
  })

  test('Should apply additional class names', () => {
    const { container } = render(<Collapse className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('Should allow passing extra props', () => {
    render(<Collapse data-testid="collapse" />)
    expect(screen.getByTestId('collapse')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Collapse ref={ref}>Test</Collapse>)
    expect(ref.current).toBeInTheDocument()
  })

  test('Should call onOpen when opened', () => {
    const handleOpen = jest.fn()
    const { getByTestId } = render(
      <Collapse onOpen={handleOpen} data-testid="collapse" />
    )
    fireEvent.focus(getByTestId('collapse'))
    expect(handleOpen).toHaveBeenCalled()
  })

  test('Should call onClose when closed', () => {
    const handleClose = jest.fn()
    const { getByTestId } = render(
      <Collapse onClose={handleClose} data-testid="collapse" />
    )
    fireEvent.blur(getByTestId('collapse'))
    expect(handleClose).toHaveBeenCalled()
  })

  test('Should call onToggle when checkbox is changed', () => {
    const handleToggle = jest.fn()
    render(<Collapse checkbox onToggle={handleToggle} data-testid="collapse" />)
    const checkboxInput = screen.getByRole('checkbox')
    fireEvent.click(checkboxInput)

    expect(handleToggle).toHaveBeenCalled()
  })

  test('Should render CollapseTitle subcomponent', () => {
    render(<Collapse.Title>Title Content</Collapse.Title>)
    const titleElement = screen.getByText('Title Content')
    expect(titleElement).toBeInTheDocument()
  })

  test('Should render CollapseContent subcomponent', () => {
    render(<Collapse.Content>Test Content</Collapse.Content>)
    const contentElement = screen.getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
