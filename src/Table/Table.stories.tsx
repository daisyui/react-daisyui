import React from 'react'
import { Story, Meta } from '@storybook/react'

import Table, { TableProps } from '.'

export default {
  title: 'Data Display/Table',
  component: Table,
} as Meta

export const Default: Story<TableProps> = (args) => {
  return (
    <Table {...args}>
      <Table.Head>
        <span />
        <span>Name</span>
        <span>Job</span>
        <span>Favorite Color</span>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <span>1</span>
          <span>Cy Ganderton</span>
          <span>Quality Control Specialist</span>
          <span>Blue</span>
        </Table.Row>

        <Table.Row>
          <span>2</span>
          <span>Hart Hagerty</span>
          <span>Desktop Support Technician</span>
          <span>Purple</span>
        </Table.Row>

        <Table.Row>
          <span>3</span>
          <span>Brice Swyre</span>
          <span>Tax Accountant</span>
          <span>Red</span>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

Default.args = {}
