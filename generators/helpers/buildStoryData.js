import { colorOptions } from '../options/index.js'

export const buildStoryData = (data) => {
  data.stories = []

  // Automatically create stories for each color or status option
  if (data.colors) {
    if (data.colors === 'statusColors') {
      data.stories.push({
        storyName: 'StatusColors',
        wrapWithDiv: 'true',
        divWrapperClassName: 'flex gap-x-2',
        showDefault: true,
        props: [
          {
            propName: 'status',
            values: colorOptions['statusColors'].options.map((item) => ({
              children: item,
              value: `"${item}"`,
            })),
          },
        ],
      })
    } else {
      data.stories.push({
        storyName: 'ComponentColors',
        wrapWithDiv: 'true',
        divWrapperClassName: 'flex gap-x-2',
        showDefault: true,
        props: [
          {
            propName: 'color',
            values: colorOptions['allColors'].options.map((item) => ({
              children: item,
              value: `"${item}"`,
            })),
          },
        ],
      })
    }
  }

  // Automatically create stories for each size option
  if (data.sizes) {
    data.stories.push({
      storyName: 'Sizes',
      wrapWithDiv: true,
      divWrapperClassName: 'flex gap-x-2',
      props: [
        {
          propName: 'size',
          values: ['xs', 'sm', 'md', 'lg'].map((item) => ({
            children: item,
            value: `"${item}"`,
          })),
        },
      ],
    })
  }

  // Create a story for disabled
  if (data.disabled) {
    data.stories.push({
      storyName: 'Disabled',
      props: [
        {
          propName: 'disabled',
          values: [{ children: 'Disabled', value: '{true}' }],
        },
      ],
    })
  }

  // Create a stor for responsive
  if (data.responsive) {
    data.stories.push({
      storyName: 'Responsive',
      props: [
        {
          propName: 'responsive',
          values: [{ children: 'Responsive', value: '{true}' }],
        },
      ],
    })
  }

  console.log(data)

  return data
}
