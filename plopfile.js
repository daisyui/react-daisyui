import { componentGenerator } from './generators/index.js'

export default function (plop) {
  plop.setGenerator('component', componentGenerator)
}
