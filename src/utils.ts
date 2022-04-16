import React from 'react'
import { twMerge } from 'tailwind-merge'

export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

// Returns true if an element is a react fragment
export const isReactFragment = (node: React.ReactNode) => {
  if (!node) return false

  if ((node as React.ReactElement)?.type) {
    return (node as React.ReactElement)?.type === React.Fragment
  }

  return node === React.Fragment
}

// Return true if a react element is valid and not a fragment
export const isValidAndNotFragment = (node: React.ReactNode) => {
  return !isReactFragment(node) && React.isValidElement(node)
}

// If an invalid element or fragment is passed in as the node, wrap it with the wrapper and add props
// If a valid element is passed, add the props
export const wrapWithElementIfInvalid = ({
  node,
  wrapper,
  props = {},
}: {
  node: React.ReactNode
  wrapper: React.ReactElement
  props?: any
}) => {
  if (!node) {
    return React.cloneElement(wrapper, props)
  } else if (!React.isValidElement(node)) {
    return React.cloneElement(wrapper, props, node)
  } else if (isReactFragment(node)) {
    return React.cloneElement(
      wrapper,
      { ...props, className: twMerge(node.props?.className, props?.className) },
      node.props.children
    )
  } else {
    return React.cloneElement(node, {
      ...props,
      className: twMerge(node.props?.className, props?.className),
    })
  }
}
