import { colorOptions, htmlTagOptions } from './options/index.js'

const generateComponent = (data) => {
  console.warn('Remove force: true from generator when done testing!')

  data.twPrefix && data.twPrefix.toLowerCase()

  // Add to import ___ from '../types', props, spread props, and classes
  data.typeImports = []
  data.propTypes = []
  data.spreadProps = []
  data.props = []
  data.classNames = []
  if (data.colors) {
    data.typeImports.push(colorOptions[data.colors].type)
    data.propTypes.push(colorOptions[data.colors].propType)
    data.spreadProps.push(`${colorOptions[data.colors].prop}`)

    if (data.colors === 'statusColors') {
      data.classNames.push(`[${'`'}${data.twPrefix}-${'${status}`'}]: status`)
    } else {
      data.classNames.push(`[${'`'}${data.twPrefix}-${'${color}`'}]: color`)
    }
  }
  if (data.sizes) {
    data.typeImports.push('ComponentSize')
    data.propTypes.push('size?: ComponentSize')
    data.spreadProps.push('size')
    data.classNames.push(`[${'`'}${data.twPrefix}-${'${size}`'}]: size`)
  }
  if (data.disabled) {
    data.propTypes.push('disabled?: Boolean')
    data.spreadProps.push('disabled = false')

    // If a button or input, add the disabled attribute to the html element
    if (['input', 'button'].includes(data.htmlTag)) {
      data.props.push('disabled={disabled}')
    }

    // if twPrefix is set, add the disabled class to the html element
    if (data.twPrefix) {
      data.classNames.push(`'${data.twPrefix}-disabled': disabled`)
    }
  }
  if (data.responsive) {
    data.propTypes.push('responsive?: Boolean')
    data.spreadProps.push('responsive = false')
    if (data.sizes) {
      data.classNames.push(
        `'${data.twPrefix}-xs md:${data.twPrefix}-sm lg:${data.twPrefix}-md xl:${data.twPrefix}-lg': responsive`
      )
    } else {
      data.classNames.push('responsive')
    }
  }

  data.refType = htmlTagOptions[data.htmlTag].refType

  console.log(data)

  return data
}

const generateComponentStories = (data) => {
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

export const componentGenerator = {
  description: 'Component generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name:',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'Storybook root (folder name):',
    },
    {
      type: 'confirm',
      name: 'hasTwPrefix',
      default: false,
      message:
        'Does this component have a specific tailwind prefix (ex: btn, badge, card)?',
    },
    {
      type: 'input',
      name: 'twPrefix',
      message: 'Tailwind prefix (ex: btn, badge, card):',
      when: function (input) {
        return input.hasTwPrefix
      },
    },
    {
      type: 'list',
      name: 'colors',
      message: 'Generate color options?',
      when: function (input) {
        return input.hasTwPrefix
      },
      default: false,
      choices: [
        { name: 'No', value: false },
        ...Object.values(colorOptions).map(({ name, value }) => ({
          name,
          value,
        })),
      ],
    },
    {
      type: 'confirm',
      name: 'sizes',
      message: 'Generate sizes?',
      when: function (input) {
        return input.hasTwPrefix
      },
      default: false,
    },
    {
      type: 'confirm',
      name: 'disabled',
      message: 'Can your component be disabled?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'responsive',
      message: 'Can your component be responsive?',
      default: false,
    },
    {
      type: 'list',
      name: 'htmlTag',
      default: 'div',
      message: 'Component base HTML tag:',
      loop: false,
      choices: [
        ...Object.values(htmlTagOptions).map(({ value }) => ({
          name: value,
          value,
        })),
      ],
    },
  ],
  actions: (data) => {
    return [
      {
        force: true,
        type: 'add',
        path: 'src/{{properCase name}}/index.ts',
        templateFile: './generators/index.ts.hbs',
      },
      {
        force: true,
        type: 'add',
        data: generateComponent(data),
        templateFile: './generators/Component.tsx.hbs',
        path: 'src/{{properCase name}}/{{properCase name}}.tsx',
      },
      {
        force: true,
        type: 'add',
        data: generateComponentStories(data),
        templateFile: './generators/Component.stories.tsx.hbs',
        path: 'src/{{properCase name}}/{{properCase name}}.stories.tsx',
      },
    ]
  },
}
