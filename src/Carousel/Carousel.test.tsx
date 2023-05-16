import { render, screen } from '@testing-library/react'
import Carousel from './Carousel'

const children = [
  <Carousel.Item
    key="1"
    id="slide1"
    src="http://xyz/images/pic-1.jpg"
    alt="Pic-1"
  />,
  <Carousel.Item
    key="2"
    id="slide2"
    src="http://xyz/images/pic-2.jpg"
    alt="Pic-2"
  />,
  <Carousel.Item
    key="3"
    id="slide3"
    src="http://xyz/images/pic-3.jpg"
    alt="Pic-3"
  />,
]

describe('Carousel', () => {
  it('Should render a carousel', () => {
    render(<Carousel>{children}</Carousel>)

    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel')

    const items = screen.getAllByRole('img')
    expect(items.length).toBe(children.length)
  })

  it('Should render a numbered carousel', () => {
    render(<Carousel display="numbered">{children}</Carousel>)
    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel')

    const items = screen.getAllByRole('img')
    expect(items.length).toBe(children.length)

    expect(screen.getAllByRole('button')).toHaveLength(children.length)
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument()
  })

  it('Should render a sequential carousel', () => {
    render(<Carousel display="sequential">{children}</Carousel>)
    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel')

    const items = screen.getAllByRole('img')
    expect(items.length).toBe(children.length)

    const buttons = screen.queryAllByRole('button', { name: /❮|❯/ })
    expect(buttons).toHaveLength(children.length * 2)
  })

  it('Should render a carousel that snap elements to center', () => {
    render(<Carousel snap="center">{children}</Carousel>)
    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel-center')
  })

  it('Should render a carousel that snap elements to end', () => {
    render(<Carousel snap="end">{children}</Carousel>)
    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel-end')
  })

  it('Should render a vertical carousel', () => {
    render(<Carousel vertical>{children}</Carousel>)
    const carousel = screen.getByRole('listbox', { name: 'Image carousel' })
    expect(carousel).toHaveClass('carousel-vertical')
  })
})
