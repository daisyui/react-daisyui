import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './'

describe('Card', () => {
  it('Should render Card', () => {
    const { getByLabelText } = render(<Card />)
    expect(getByLabelText('Card')).toBeInTheDocument()
  })

  it('Should render children', () => {
    const { container } = render(
      <Card>
        <div>Child element</div>
      </Card>
    )
    expect(container.firstChild).toHaveTextContent('Child element')
  })

  it('Should apply the "bordered" prop', () => {
    const { getByLabelText } = render(<Card bordered />)
    expect(getByLabelText('Card')).toHaveClass('card-bordered')
  })

  it('Should apply the "imageFull" prop', () => {
    const { getByLabelText } = render(<Card imageFull />)
    expect(getByLabelText('Card')).toHaveClass('image-full')
  })

  it('Should apply the "normal" prop', () => {
    const { getByLabelText } = render(<Card normal />)
    expect(getByLabelText('Card')).toHaveClass('card-normal')
  })

  it('Should apply the "compact" prop', () => {
    const { getByLabelText } = render(<Card compact />)
    expect(getByLabelText('Card')).toHaveClass('card-compact')
  })

  it('Should apply the "side" prop', () => {
    const { getByLabelText } = render(<Card side />)
    expect(getByLabelText('Card')).toHaveClass('card-side')
  })

  it('Should apply additional class names', () => {
    const { getByLabelText } = render(<Card className="custom-class" />)
    expect(getByLabelText('Card')).toHaveClass('custom-class')
  })

  it('Should allow passing extra props', () => {
    render(<Card data-testid="card" />)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Card ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })

  it('Should render CardActions component', () => {
    const { container } = render(<Card.Actions />)
    expect(container.firstChild).toHaveClass('card-actions')
  })

  it('Should render CardBody component', () => {
    const { container } = render(<Card.Body />)
    expect(container.firstChild).toHaveClass('card-body')
  })

  it('Should render CardTitle component', () => {
    const { container } = render(<Card.Title />)
    expect(container.firstChild).toHaveClass('card-title')
  })

  it('Should render CardImage component', () => {
    render(<Card.Image src="http://xyz/images/pic-1.jpg" alt="test image" />)
    const figureElement = screen.getByRole('figure')
    expect(figureElement).toBeInTheDocument()
    const imgElement = screen.getByRole('img') as HTMLImageElement
    expect(imgElement).toBeInTheDocument()
    expect(imgElement.src).toBe('http://xyz/images/pic-1.jpg')
    expect(imgElement.alt).toBe('test image')
  })
})
