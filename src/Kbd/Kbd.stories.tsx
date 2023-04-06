import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Kbd, { KbdProps } from '.'

export default {
  title: 'Data Display/Kbd',
  component: Kbd,
} as Meta

export const Default: Story<KbdProps> = (args) => {
  return (
    <>
      <Kbd {...args}>A</Kbd>
    </>
  )
}

export const InText: Story<KbdProps> = (args) => {
  return (
    <div className="font-sans">
      Press <Kbd {...args}>F</Kbd> to pay respects.
    </div>
  )
}
InText.args = {}

export const KeyCombination: Story<KbdProps> = (args) => {
  return (
    <>
      <Kbd {...args}>ctrl</Kbd>+<Kbd {...args}>shift</Kbd>+
      <Kbd {...args}>del</Kbd>
    </>
  )
}

export const FunctionKeys: Story<KbdProps> = (args) => {
  return (
    <>
      <Kbd {...args}>⌘</Kbd>
      <Kbd {...args}>⌥</Kbd>
      <Kbd {...args}>⇧</Kbd>
      <Kbd {...args}>⌃</Kbd>
    </>
  )
}

export const FullKeyboard: Story<KbdProps> = (args) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center gap-1 w-full">
        <Kbd {...args}>q</Kbd>
        <Kbd {...args}>w</Kbd>
        <Kbd {...args}>e</Kbd>
        <Kbd {...args}>r</Kbd>
        <Kbd {...args}>t</Kbd>
        <Kbd {...args}>y</Kbd>
        <Kbd {...args}>u</Kbd>
        <Kbd {...args}>i</Kbd>
        <Kbd {...args}>o</Kbd>
        <Kbd {...args}>p</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>a</Kbd>
        <Kbd {...args}>s</Kbd>
        <Kbd {...args}>d</Kbd>
        <Kbd {...args}>f</Kbd>
        <Kbd {...args}>g</Kbd>
        <Kbd {...args}>h</Kbd>
        <Kbd {...args}>j</Kbd>
        <Kbd {...args}>k</Kbd>
        <Kbd {...args}>l</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>z</Kbd>
        <Kbd {...args}>x</Kbd>
        <Kbd {...args}>c</Kbd>
        <Kbd {...args}>v</Kbd>
        <Kbd {...args}>b</Kbd>
        <Kbd {...args}>n</Kbd>
        <Kbd {...args}>m</Kbd>
        <Kbd {...args}>/</Kbd>
      </div>
    </div>
  )
}

export const ArrowKeys: Story<KbdProps> = (args) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <Kbd {...args}>▲</Kbd>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <Kbd {...args}>◀︎</Kbd>
        <Kbd {...args}>▶︎</Kbd>
      </div>
      <div className="flex justify-center w-full">
        <Kbd {...args}>▼</Kbd>
      </div>
    </>
  )
}
