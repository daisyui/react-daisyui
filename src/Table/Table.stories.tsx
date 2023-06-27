import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Table, { TableProps } from '.'
import Checkbox from '../Checkbox'
import Mask from '../Mask'
import Badge from '../Badge'
import Button from '../Button'

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
                src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
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
                src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
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
                src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
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
                src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
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

export const PinnedRows: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto h-96">
      <Table {...args}>
        <thead>
          <tr>
            <th>A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batgirl</td>
          </tr>
          <tr>
            <td>Batman</td>
          </tr>
          <tr>
            <td>Batwoman</td>
          </tr>
          <tr>
            <td>Black Canary</td>
          </tr>
          <tr>
            <td>Black Panther</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Captain America</td>
          </tr>
          <tr>
            <td>Captain Marvel</td>
          </tr>
          <tr>
            <td>Catwoman</td>
          </tr>
          <tr>
            <td>Conan the Barbarian</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daredevil</td>
          </tr>
          <tr>
            <td>The Defenders</td>
          </tr>
          <tr>
            <td>Doc Savage</td>
          </tr>
          <tr>
            <td>Doctor Strange</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elektra</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fantastic Four</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>G</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ghost Rider</td>
          </tr>
          <tr>
            <td>Green Arrow</td>
          </tr>
          <tr>
            <td>Green Lantern</td>
          </tr>
          <tr>
            <td>Guardians of the Galaxy</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hawkeye</td>
          </tr>
          <tr>
            <td>Hellboy</td>
          </tr>
          <tr>
            <td>Incredible Hulk</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>I</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iron Fist</td>
          </tr>
          <tr>
            <td>Iron Man</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marvelman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robin</td>
          </tr>
          <tr>
            <td>The Rocketeer</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Shadow</td>
          </tr>
          <tr>
            <td>Spider-Man</td>
          </tr>
          <tr>
            <td>Sub-Mariner</td>
          </tr>
          <tr>
            <td>Supergirl</td>
          </tr>
          <tr>
            <td>Superman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>T</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teenage Mutant Ninja Turtles</td>
          </tr>
          <tr>
            <td>Thor</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>W</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Wasp</td>
          </tr>
          <tr>
            <td>Watchmen</td>
          </tr>
          <tr>
            <td>Wolverine</td>
          </tr>
          <tr>
            <td>Wonder Woman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X-Men</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zatanna</td>
          </tr>
          <tr>
            <td>Zatara</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
PinnedRows.args = {
  pinRows: true,
}

export const PinnedRowsAndPinnedCols: Story<TableProps> = (args) => {
  return (
    <div className="overflow-x-auto h-96 w-96">
      <Table {...args}>
        <thead>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
            <th>3</th>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td>Crimson</td>
            <th>4</th>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td>Indigo</td>
            <th>5</th>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td>Purple</td>
            <th>6</th>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td>Yellow</td>
            <th>7</th>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td>Crimson</td>
            <th>8</th>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td>Maroon</td>
            <th>9</th>
          </tr>
          <tr>
            <th>10</th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td>Green</td>
            <th>10</th>
          </tr>
          <tr>
            <th>11</th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td>Indigo</td>
            <th>11</th>
          </tr>
          <tr>
            <th>12</th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
            <td>2/12/2021</td>
            <td>Maroon</td>
            <th>12</th>
          </tr>
          <tr>
            <th>13</th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
            <td>5/31/2020</td>
            <td>Purple</td>
            <th>13</th>
          </tr>
          <tr>
            <th>14</th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
            <td>4/27/2021</td>
            <td>Aquamarine</td>
            <th>14</th>
          </tr>
          <tr>
            <th>15</th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
            <td>8/8/2020</td>
            <td>Crimson</td>
            <th>15</th>
          </tr>
          <tr>
            <th>16</th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
            <td>7/30/2020</td>
            <td>Green</td>
            <th>16</th>
          </tr>
          <tr>
            <th>17</th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
            <td>2/28/2021</td>
            <td>Khaki</td>
            <th>17</th>
          </tr>
          <tr>
            <th>18</th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
            <td>9/29/2020</td>
            <td>Purple</td>
            <th>18</th>
          </tr>
          <tr>
            <th>19</th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
            <td>10/27/2020</td>
            <td>Aquamarine</td>
            <th>19</th>
          </tr>
          <tr>
            <th>20</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordinator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td>Red</td>
            <th>20</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
PinnedRowsAndPinnedCols.args = {
  size: 'xs',
  pinRows: true,
  pinCols: true,
}
