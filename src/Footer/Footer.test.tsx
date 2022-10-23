import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('Footer', () => {
  const footerTitle = 'Services'
  const linkList = ['Branding', 'Design', 'Marketing', 'Advertisement']

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

  it('Footer title have className "p-10 bg-neutral text-neutral-content"', () => {
    const { container } = render(
      <Footer className="p-10 bg-neutral text-neutral-content">
        <div>
          <Footer.Title>{footerTitle}</Footer.Title>
        </div>
      </Footer>
    )
    const titleClassName = container.getElementsByClassName(
      'p-10 bg-neutral text-neutral-content'
    )
    expect(titleClassName).toBeTruthy()
  })

  it('Footer links have className "link link-hover"', () => {
    const { container } = render(
      <Footer className="p-10 bg-neutral text-neutral-content">
        <div>
          <Footer.Title>{footerTitle}</Footer.Title>
          {linkList.map((links) => (
            <a key={links} className="link link-hover">
              {links}
            </a>
          ))}
        </div>
      </Footer>
    )
    expect(screen.getByText(linkList[0])).toBeInTheDocument()
    const quantityLinks = container.getElementsByClassName('link link-hover')
    expect(quantityLinks.length).toBe(4)
  })

  it('Should render Footer link list', () => {
    const { container } = render(
      <Footer className="p-10 bg-neutral text-neutral-content">
        <div>
          <Footer.Title>{footerTitle}</Footer.Title>
          {linkList.map((links) => (
            <a key={links} className="link link-hover">
              {links}
            </a>
          ))}
        </div>
      </Footer>
    )
    const linksClassName = container.getElementsByClassName('link link-hover')
    expect(linksClassName).toBeTruthy()
  })
})
