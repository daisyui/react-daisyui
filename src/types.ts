import {
  componentStatuses,
  componentColors,
  componentPositions,
  compnentSizes,
  componentShapes,
  bgColors,
  brandColors,
} from './constants'
import { DEFAULT_THEMES } from './defaultThemes'

export interface IComponentBaseProps {
  dataTheme?: typeof DEFAULT_THEMES[number] | string
}

export type ComponentColor = typeof componentColors[number]

export type ComponentPosition = typeof componentPositions[number]
export type ComponentShape = typeof componentShapes[number]
export type ComponentSize = typeof compnentSizes[number]
export type ComponentStatus = typeof componentStatuses[number]
export type ComponentBrandColors = typeof brandColors[number]
export type ComponentBgColors = typeof bgColors[number]
