import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Tabs from './'

describe('Tabs', () => {
  const tabLabel1 = 'one'
  const tabLabel2 = 'two'
  const tabValue1 = 1
  const tabValue2 = 2

  it('Should render tabs', () => {
    render(
      <Tabs>
        <Tabs.Tab value={tabValue1}>{tabLabel1}</Tabs.Tab>
        <Tabs.Tab value={tabValue2}>{tabLabel2}</Tabs.Tab>
      </Tabs>
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  it('Should render tab labels', () => {
    render(
      <Tabs>
        <Tabs.Tab value={tabValue1}>{tabLabel1}</Tabs.Tab>
        <Tabs.Tab value={tabValue2}>{tabLabel2}</Tabs.Tab>
      </Tabs>
    )
    expect(screen.getByText(tabLabel1)).toBeInTheDocument()
    expect(screen.getByText(tabLabel2)).toBeInTheDocument()
  })

  it('Should call handler on tab click', async () => {
    const mockHandler = jest.fn()
    render(
      <Tabs onChange={mockHandler}>
        <Tabs.Tab value={tabValue1}>{tabLabel1}</Tabs.Tab>
        <Tabs.Tab value={tabValue2}>{tabLabel2}</Tabs.Tab>
      </Tabs>
    )
    const tab = screen.getByText(tabLabel1)
    await userEvent.click(tab)
    expect(mockHandler).toHaveBeenCalled()
    expect(mockHandler).toBeCalledWith(tabValue1)
  })
})
