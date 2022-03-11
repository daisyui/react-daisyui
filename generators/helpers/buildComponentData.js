import { colorOptions, htmlTagOptions } from '../options/index.js'

export const buildComponentData = (data) => {
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

  data.htmlAttributesType = htmlTagOptions[data.htmlTag].attributesType
  data.refType = htmlTagOptions[data.htmlTag].refType
  return data
}
