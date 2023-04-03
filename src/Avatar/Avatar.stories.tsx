import React from 'react'
import { StoryFn as Story, Meta } from '@storybook/react'

import Avatar, { AvatarProps } from '.'
import { AvatarGroupProps } from './AvatarGroup'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      name: 'size',
      control: { type: 'radio' },
      options: ['lg', 'md', 'sm', 'xs'],
    },
  },
} as Meta

const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
}

export const Rounded = Template.bind({})
Rounded.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  shape: 'circle',
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  shape: 'circle',
  size: 30,
}

CustomSize.argTypes = {
  size: {
    control: { type: 'number', min: 1, step: 1 },
  },
}

export const Group: Story<AvatarProps & AvatarGroupProps> = (args) => {
  return (
    <Avatar.Group space={args.space}>
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
    </Avatar.Group>
  )
}
Group.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  space: -6,
}

export const Ring = Template.bind({})
Ring.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  border: true,
  borderColor: 'primary',
  shape: 'circle',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  shape: 'circle',
  letters: 'Y',
}

const reactLogoSvg = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="600px"
    height="600px"
    viewBox="0 0 600 600"
    enableBackground="new 0 0 600 600"
  >
    <g id="Layer_2">
      <path
        fill="none"
        stroke="#E91E63"
        strokeWidth="24"
        strokeMiterlimit="10"
        d="M371.987,227.641
		c47.628,47.628,85.039,98.708,106.914,143.552c26.358,54.033,30.096,99.722,11.103,118.714
		c-19.793,19.793-68.267,15.884-125.731-12.979c-43.445-21.821-92.031-59.119-137.242-104.331
		c-46.354-46.354-84.95-95.545-106.667-139.816c-27.48-56.023-30.057-103.743-10.643-123.157
		c18.838-18.839,63.248-16.056,116.694,9.757C271.574,141.193,323.895,179.548,371.987,227.641z"
      />
      <path
        fill="none"
        stroke="#E91E63"
        strokeWidth="24"
        strokeMiterlimit="10"
        d="M272.931,201.125
		c65.052-17.465,127.989-24.354,177.767-20.902c59.974,4.16,101.42,23.747,108.385,49.688
		c7.259,27.033-20.345,67.073-74.054,102.434c-40.608,26.733-97.189,50.188-158.941,66.769
		c-63.312,16.998-125.207,25.858-174.408,22.553c-62.26-4.181-104.884-25.789-112.004-52.306
		c-6.907-25.731,17.688-62.811,66.75-96.214C147.879,244.923,207.243,218.761,272.931,201.125z"
      />
      <path
        fill="none"
        stroke="#E91E63"
        strokeWidth="24"
        strokeMiterlimit="10"
        d="M200.469,273.707
		c17.357-65.081,42.82-123.05,70.671-164.45c33.556-49.882,71.225-76.008,97.178-69.086c27.045,7.212,47.949,51.123,51.76,115.315
		c2.883,48.533-5.055,109.266-21.531,171.046c-16.892,63.341-40.126,121.389-67.562,162.365
		c-34.716,51.852-74.723,77.988-101.252,70.913c-25.743-6.865-45.584-46.692-50.021-105.881
		C175.963,403.92,182.944,339.424,200.469,273.707z"
      />
    </g>
    <g id="Layer_3">
      <path
        fill="#E91E63"
        d="M300,349.369c-1.019,0-1.881-0.353-2.586-1.058l-36.679-35.386c-0.392-0.313-0.931-0.822-1.617-1.528
		c-0.686-0.705-1.773-1.988-3.262-3.851c-1.489-1.86-2.822-3.771-3.997-5.73s-2.224-4.33-3.145-7.112
		c-0.92-2.782-1.381-5.486-1.381-8.111c0-8.621,2.488-15.361,7.465-20.221c4.977-4.859,11.854-7.289,20.631-7.289
		c2.43,0,4.909,0.421,7.436,1.264c2.527,0.843,4.879,1.979,7.054,3.41c2.174,1.43,4.046,2.772,5.613,4.026s3.057,2.586,4.467,3.997
		c1.411-1.411,2.899-2.743,4.467-3.997c1.568-1.254,3.438-2.596,5.614-4.026c2.175-1.431,4.525-2.567,7.054-3.41
		c2.527-0.842,5.006-1.264,7.435-1.264c8.778,0,15.655,2.43,20.632,7.289c4.978,4.859,7.466,11.6,7.466,20.221
		c0,8.66-4.487,17.477-13.461,26.451l-36.619,35.268C301.881,349.017,301.019,349.369,300,349.369z"
      />
    </g>
  </svg>
)

export const WithSvg = Template.bind({})
WithSvg.args = {
  shape: 'circle',
  children: reactLogoSvg,
  border: true,
}

export const MultipleChildren: Story<Omit<AvatarProps, 'children'>> = (
  args
) => {
  return (
    <Avatar {...args}>
      <span className="absolute text-center font-bold">React</span>
      {reactLogoSvg}
    </Avatar>
  )
}

export const Colors: Story<Omit<AvatarProps, 'color' | 'borderColor'>> = ({
  src,
  letters,
  ...args
}) => {
  return (
    <div>
      <div className="flex gap-4 m-4">
        <Avatar {...args} borderColor="primary" src={src} />
        <Avatar {...args} borderColor="secondary" src={src} />
        <Avatar {...args} borderColor="accent" src={src} />
        <Avatar {...args} borderColor="ghost" src={src} />
        <Avatar {...args} borderColor="info" src={src} />
        <Avatar {...args} borderColor="success" src={src} />
        <Avatar {...args} borderColor="warning" src={src} />
        <Avatar {...args} borderColor="error" src={src} />
      </div>
      <div className="flex gap-4 m-4">
        <Avatar
          {...args}
          borderColor="primary"
          color="primary"
          letters={letters}
        />
        <Avatar
          {...args}
          borderColor="secondary"
          color="secondary"
          letters={letters}
        />
        <Avatar
          {...args}
          borderColor="accent"
          color="accent"
          letters={letters}
        />
        <Avatar {...args} borderColor="ghost" color="ghost" letters={letters} />
        <Avatar {...args} borderColor="info" color="info" letters={letters} />
        <Avatar
          {...args}
          borderColor="success"
          color="success"
          letters={letters}
        />
        <Avatar
          {...args}
          borderColor="warning"
          color="warning"
          letters={letters}
        />
        <Avatar {...args} borderColor="error" color="error" letters={letters} />
      </div>
    </div>
  )
}
Colors.args = {
  src: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  letters: 'Y',
  border: true,
  shape: 'circle',
  size: 'sm',
}
