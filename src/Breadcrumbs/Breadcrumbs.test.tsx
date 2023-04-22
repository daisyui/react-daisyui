import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from './'

describe('Breadcrumbs', () => {
  it('Should render Breadcrumbs', () => {
    render(<Breadcrumbs />)
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumbs' })
    ).toBeInTheDocument()
  })

  it('Should render its children', () => {
    const children = [
      <Breadcrumbs.Item key="1">First item</Breadcrumbs.Item>,
      <Breadcrumbs.Item key="2">Second item</Breadcrumbs.Item>,
      <Breadcrumbs.Item key="3">Third item</Breadcrumbs.Item>,
    ]
    render(<Breadcrumbs>{children}</Breadcrumbs>)
    expect(screen.getByText('First item')).toBeInTheDocument()
    expect(screen.getByText('Second item')).toBeInTheDocument()
    expect(screen.getByText('Third item')).toBeInTheDocument()
  })

  it('Should allow setting a custom class name', () => {
    render(<Breadcrumbs className="my-custom-class" />)
    expect(screen.getByRole('navigation', { name: 'Breadcrumbs' })).toHaveClass(
      'my-custom-class'
    )
  })

  it('Should allow passing extra props', () => {
    render(<Breadcrumbs data-testid="my-breadcrumbs" />)
    expect(screen.getByTestId('my-breadcrumbs')).toBeInTheDocument()
  })

  it('Should forward the ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Breadcrumbs ref={ref} />)
    expect(ref.current).toBeInTheDocument()
  })
})
