import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tabs from './'

describe('Tabs', () => {
  const tabLabel1 = 'one'
  const tabLabel2 = 'two'
  const tabContent1 = 'content one'
  const tabContent2 = 'content two'

  it('Should render tabs', () => {
    render(
      <Tabs>
        <Tabs.Tab>{tabLabel1}</Tabs.Tab>
        <Tabs.Tab>{tabLabel2}</Tabs.Tab>
      </Tabs>
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('Should render tab labels', () => {
    render(
      <Tabs>
        <Tabs.Tab>{tabLabel1}</Tabs.Tab>
        <Tabs.Tab>{tabLabel2}</Tabs.Tab>
      </Tabs>
    )
    expect(screen.getByText(tabLabel1)).toBeInTheDocument()
    expect(screen.getByText(tabLabel2)).toBeInTheDocument()
  })

  it('Should render radio tabs', () => {
    render(
      <Tabs>
        <Tabs.RadioTab name="tab" label={tabLabel1}>
          {tabContent1}
        </Tabs.RadioTab>
        <Tabs.RadioTab name="tab" label={tabLabel2} defaultChecked={true}>
          {tabContent2}
        </Tabs.RadioTab>
      </Tabs>
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('Should render tab content', () => {
    render(
      <Tabs>
        <Tabs.RadioTab name="tab" label={tabLabel1}>
          {tabContent1}
        </Tabs.RadioTab>
        <Tabs.RadioTab name="tab" label={tabLabel2} defaultChecked={true}>
          {tabContent2}
        </Tabs.RadioTab>
      </Tabs>
    )
    expect(screen.getByText(tabContent1)).toBeInTheDocument()
    expect(screen.getByText(tabContent2)).toBeInTheDocument()
  })
})
