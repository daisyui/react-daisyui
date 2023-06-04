import { render } from '@testing-library/react'
import Loading from '.'

describe('Loading', () => {
  it('renders a default variant', () => {
    const {container} = render(<Loading />)
    expect(container.querySelector('.loading')).toHaveClass('loading-spinner')
  })

  it('renders a variant', () => {
    const {container} = render(<Loading variant="infinity" />)
    expect(container.querySelector('.loading')).toHaveClass('loading-infinity')
  })

  it('renders a size', () => {
    const {container} = render(<Loading size="xs" />)
    expect(container.querySelector('.loading')).toHaveClass('loading-xs')
  })

  it('renders a color', () => {
    const {container} = render(<Loading color="primary" />)
    expect(container.querySelector('.loading')).toHaveClass('text-primary')
  })

  it('renders a variant and size', () => {
    const {container} = render(<Loading variant="dots" size="xs" />)
    expect(container.querySelector('.loading')).toHaveClass('loading-dots')
    expect(container.querySelector('.loading')).toHaveClass('loading-xs')
  })
})
