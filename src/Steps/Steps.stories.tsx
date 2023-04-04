import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Steps, { StepsProps } from '.'
import Step from './Step'

export default {
  title: 'Navigation/Steps',
  component: Steps,
} as Meta

export const Default: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  )
}

export const Responsive: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  )
}
Responsive.args = {
  className: 'lg:steps-horizontal',
  vertical: true,
}

export const WithDataContent: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step value="?" color="neutral">
        Step 1
      </Steps.Step>
      <Steps.Step value="!" color="neutral">
        Step 2
      </Steps.Step>
      <Steps.Step value="✓" color="neutral">
        Step 3
      </Steps.Step>
      <Steps.Step value="✕" color="neutral">
        Step 4
      </Steps.Step>
      <Steps.Step value="!" color="neutral">
        Step 5
      </Steps.Step>
      <Steps.Step value="" color="neutral">
        Step 6
      </Steps.Step>
      <Steps.Step value="●" color="neutral">
        Step 7
      </Steps.Step>
    </Steps>
  )
}

export const CustomColors: Story<StepsProps> = (args) => {
  return (
    <Steps {...args}>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>
      <Steps.Step value="?" color="error">
        Sit on toilet
      </Steps.Step>
    </Steps>
  )
}

export const WithScrollableWrapper: Story<StepsProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <Steps {...args}>
        <Steps.Step>start</Steps.Step>
        <Steps.Step color="secondary">2</Steps.Step>
        <Steps.Step color="secondary">3</Steps.Step>
        <Steps.Step color="secondary">4</Steps.Step>
        <Steps.Step>5</Steps.Step>
        <Steps.Step color="accent">6</Steps.Step>
        <Steps.Step color="accent">7</Steps.Step>
        <Steps.Step>8</Steps.Step>
        <Steps.Step color="error">9</Steps.Step>
        <Steps.Step color="error">10</Steps.Step>
        <Steps.Step>11</Steps.Step>
        <Steps.Step>12</Steps.Step>
        <Steps.Step color="warning">13</Steps.Step>
        <Steps.Step color="warning">14</Steps.Step>
        <Steps.Step>15</Steps.Step>
        <Steps.Step color="neutral">16</Steps.Step>
        <Steps.Step color="neutral">17</Steps.Step>
        <Steps.Step color="neutral">18</Steps.Step>
        <Steps.Step color="neutral">19</Steps.Step>
        <Steps.Step color="neutral">20</Steps.Step>
        <Steps.Step color="neutral">21</Steps.Step>
        <Steps.Step color="neutral">22</Steps.Step>
        <Steps.Step color="neutral">23</Steps.Step>
        <Steps.Step color="neutral">end</Steps.Step>
      </Steps>
    </div>
  )
}
