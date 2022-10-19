import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('Footer', () => {
  const footerTitle = 'Services'
  
  it('Should render Footer title', () => {
    render(
      <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{footerTitle}</Footer.Title>
      </div>
    </Footer>
    )
    expect(screen.getByText(footerTitle)).toBeInTheDocument()
  })
})
