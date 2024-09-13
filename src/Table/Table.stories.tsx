import { Meta, StoryFn as Story } from '@storybook/react'
import React from 'react'

import Table, { TableProps } from '.'
import Badge from '../Badge'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Mask from '../Mask'

export default {
  title: 'Data Display/Table',
  component: Table,
} as Meta

const Template: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto">
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
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const ActiveRow: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row active={true}>
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
    </div>
  )
}

export const HighlightsOnHover: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto">
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

          <Table.Row hover={true}>
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
    </div>
  )
}
export const Zebra = Template.bind({})
Zebra.args = {
  zebra: true,
}

export const WithVisualElements: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <Table {...args} className="rounded-box">
        <Table.Head>
          <Checkbox />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
          <span />
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
              />
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
            <div>
              Zemlak, Daniel and Leannon
              <br />
              <Badge color="ghost" size="sm">
                Desktop Support Technician
              </Badge>
            </div>
            <div>Purple</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
              <div>
                <div className="font-bold">Brice Swyre</div>
                <div className="text-sm opacity-50">China</div>
              </div>
            </div>
            <div>
              Carrol Group
              <br />
              <Badge color="ghost" size="sm">
                Tax Accountant
              </Badge>
            </div>
            <div>Red</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />
              <div>
                <div className="font-bold">Marjy Ferencz</div>
                <div className="text-sm opacity-50">Russia</div>
              </div>
            </div>
            <div>
              Rowe-Schoen
              <br />
              <Badge color="ghost" size="sm">
                Office Assistant I
              </Badge>
            </div>
            <div>Crimson</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
              />
              <div>
                <div className="font-bold">Yancy Tear</div>
                <div className="text-sm opacity-50">Brazil</div>
              </div>
            </div>
            <div>
              Wyman-Ledner
              <br />
              <Badge color="ghost" size="sm">
                Community Outreach Specialist
              </Badge>
            </div>
            <div>Indigo</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <span>&nbsp;</span>
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
          <span>&nbsp;</span>
        </Table.Footer>
      </Table>
    </div>
  )
}
WithVisualElements.args = {}

export const Xs: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Company</span>
          <span>Location</span>
          <span>Last Login</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Littel, Schaden and Vandervort</span>
            <span>Canada</span>
            <span>12/16/2020</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Zemlak, Daniel and Leannon</span>
            <span>United States</span>
            <span>12/5/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Carroll Group</span>
            <span>China</span>
            <span>8/15/2020</span>
            <span>Red</span>
          </Table.Row>

          <Table.Row>
            <span>4</span>
            <span>Marjy Ferencz</span>
            <span>Office Assistant I</span>
            <span>Rowe-Schoen</span>
            <span>Russia</span>
            <span>3/25/2021</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>5</span>
            <span>Yancy Tear</span>
            <span>Community Outreach Specialist</span>
            <span>Wyman-Ledner</span>
            <span>Brazil</span>
            <span>5/22/2020</span>
            <span>Indigo</span>
          </Table.Row>

          <Table.Row>
            <span>6</span>
            <span>Irma Vasilik</span>
            <span>Editor</span>
            <span>Wiza, Bins and Emard</span>
            <span>Venezuela</span>
            <span>12/8/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>7</span>
            <span>Meghann Durtnal</span>
            <span>Staff Accountant IV</span>
            <span>Schuster-Schimmel</span>
            <span>Philippines</span>
            <span>2/17/2021</span>
            <span>Yellow</span>
          </Table.Row>

          <Table.Row>
            <span>8</span>
            <span>Sammy Seston</span>
            <span>Accountant I</span>
            <span>O'Hara, Welch and Keebler</span>
            <span>Indonesia</span>
            <span>5/23/2020</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>9</span>
            <span>Lesya Tinham</span>
            <span>Safety Technician IV</span>
            <span>Turner-Kuhlman</span>
            <span>Philippines</span>
            <span>2/21/2021</span>
            <span>Maroon</span>
          </Table.Row>

          <Table.Row>
            <span>10</span>
            <span>Zaneta Tewkesbury</span>
            <span>VP Marketing</span>
            <span>Sauer LLC</span>
            <span>Chad</span>
            <span>6/23/2020</span>
            <span>Green</span>
          </Table.Row>

          <Table.Row>
            <span>11</span>
            <span>Andy Tipple</span>
            <span>Librarian</span>
            <span>Hilpert Group</span>
            <span>Poland</span>
            <span>7/9/2020</span>
            <span>Indigo</span>
          </Table.Row>

          <Table.Row>
            <span>12</span>
            <span>Sophi Biles</span>
            <span>Recruiting Manager</span>
            <span>Gutmann Inc</span>
            <span>Indonesia</span>
            <span>2/12/2021</span>
            <span>Maroon</span>
          </Table.Row>

          <Table.Row>
            <span>13</span>
            <span>Florida Garces</span>
            <span>Web Developer IV</span>
            <span>Gaylord, Pacocha and Baumbach</span>
            <span>Poland</span>
            <span>5/31/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>14</span>
            <span>Maribespan Popping</span>
            <span>Analyst Programmer</span>
            <span>Deckow-Pouros</span>
            <span>Portugal</span>
            <span>4/27/2021</span>
            <span>Aquamarine</span>
          </Table.Row>

          <Table.Row>
            <span>15</span>
            <span>Moritz Dryburgh</span>
            <span>Dental Hygienist</span>
            <span>Schiller, Cole and Hackett</span>
            <span>Sri Lanka</span>
            <span>8/8/2020</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>16</span>
            <span>Reid Semiras</span>
            <span>Teacher</span>
            <span>Sporer, Sipes and Rogahn</span>
            <span>Poland</span>
            <span>7/30/2020</span>
            <span>Green</span>
          </Table.Row>

          <Table.Row>
            <span>17</span>
            <span>Alec Lethby</span>
            <span>Teacher</span>
            <span>Reichel, Glover and Hamill</span>
            <span>China</span>
            <span>2/28/2021</span>
            <span>Khaki</span>
          </Table.Row>

          <Table.Row>
            <span>18</span>
            <span>Aland Wilber</span>
            <span>Quality Control Specialist</span>
            <span>Kshlerin, Rogahn and Swaniawski</span>
            <span>Czech Republic</span>
            <span>9/29/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>19</span>
            <span>Teddie Duerden</span>
            <span>Staff Accountant III</span>
            <span>Pouros, Ullrich and Windler</span>
            <span>France</span>
            <span>10/27/2020</span>
            <span>Aquamarine</span>
          </Table.Row>

          <Table.Row>
            <span>20</span>
            <span>Lorelei Blackstone</span>
            <span>Data Coordiator</span>
            <span>Witting, Kutch and Greenfelder</span>
            <span>Kazakhstan</span>
            <span>6/3/2020</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>company</span>
          <span>location</span>
          <span>Last Login</span>
          <span>Favorite Color</span>
        </Table.Footer>
      </Table>
    </div>
  )
}
Xs.args = {
  size: 'xs',
}

const tableData: { headers: string[]; row: string[]; footers: string[] } = {
  headers: [
    'header1',
    'header2',
    'header3',
    'header4',
    'header5',
    'header6',
    'header7',
    'header8',
    'header9',
    'header10',
  ],
  row: [
    'data1',
    'data2',
    'data3',
    'data4',
    'data5',
    'data6',
    'data7',
    'data8',
    'data9',
    'data10',
  ],
  footers: [
    'footer1',
    'footer2',
    'footer3',
    'footer4',
    'footer5',
    'footer6',
    'footer7',
    'footer8',
    'footer9',
    'footer10',
  ],
}

const renderTableItem = (v, i, renderCell = true) => {
  if (renderCell) {
    return <div>{v}</div>
  }

  return <td>{v}</td>
}

const renderHeaders = (noCell) =>
  tableData.headers.map((v, i) => renderTableItem(v, i, noCell))
const renderRow = (noCell) =>
  tableData.row.map((v, i) => renderTableItem(v, i, noCell))
const renderFooter = (noCell) =>
  tableData.footers.map((v, i) => renderTableItem(v, i, noCell))

interface NoCellStoryProps extends TableProps {
  noCell?: boolean
}

export const PinnedRowsOrColsNoCell: Story<NoCellStoryProps> = ({
  noCell,
  ...args
}) => {
  const renderRows = new Array(10)
    .fill('')
    .map(() => <Table.Row noCell={noCell}>{renderRow(!noCell)}</Table.Row>)

  return (
    <div className="overflow-x-auto max-w-lg max-h-80">
      <Table {...args}>
        <Table.Head noCell={noCell}>{renderHeaders(!noCell)}</Table.Head>
        <Table.Body>{renderRows}</Table.Body>
        <Table.Footer noCell={noCell}>{renderFooter(!noCell)}</Table.Footer>
      </Table>
    </div>
  )
}
PinnedRowsOrColsNoCell.args = {
  noCell: true,
  pinRows: true,
  pinCols: true,
}
