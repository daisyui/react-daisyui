export const colorOptions = {
  statusColors: {
    name: 'Just Status colors: info, success, warning, error',
    value: 'statusColors',
    type: 'ComponentStatus',
    propType: 'status?: ComponentStatus',
    prop: 'status',
    options: ['info', 'success', 'warning', 'error'],
  },
  allColors: {
    name: 'All colors: info, success, warning, error, primary, secondary, accent, ghost',
    value: 'allColors',
    type: 'ComponentColor',
    propType: 'color?: ComponentColor',
    prop: 'color',
    options: [
      'info',
      'success',
      'warning',
      'error',
      'neutral',
      'primary',
      'secondary',
      'accent',
      'ghost',
    ],
  },
}
