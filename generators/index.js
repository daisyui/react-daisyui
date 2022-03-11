import { colorOptions, htmlTagOptions } from './options/index.js'
import { buildComponentData, buildStoryData } from './helpers/index.js'

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
        type: 'add',
        path: 'src/{{properCase name}}/index.ts',
        templateFile: './generators/index.ts.hbs',
      },
      {
        type: 'add',
        data: buildComponentData(data),
        templateFile: './generators/Component.tsx.hbs',
        path: 'src/{{properCase name}}/{{properCase name}}.tsx',
      },
      {
        type: 'add',
        data: buildStoryData(data),
        templateFile: './generators/Component.stories.tsx.hbs',
        path: 'src/{{properCase name}}/{{properCase name}}.stories.tsx',
      },
    ]
  },
}
