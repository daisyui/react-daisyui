export interface IComponentBaseProps {
  dataTheme?: string
  className?: string
  style?: Record<string, string | number>
}

export type ComponentColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | ComponentStatus

export type ComponentPosition = 'top' | 'bottom' | 'left' | 'right'
export type ComponentShape = 'circle' | 'square'
export type ComponentSize = 'lg' | 'md' | 'sm' | 'xs'
export type ComponentStatus = 'info' | 'success' | 'warning' | 'error'
