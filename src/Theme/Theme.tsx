import React, {
  MutableRefObject,
  ElementType,
  useEffect,
  useRef,
  useState,
  ComponentPropsWithoutRef,
} from 'react'
import { defaultTheme } from '../constants'

import { DataTheme, IComponentBaseProps } from '../types'
import { ThemeContext } from './ThemeContext'
import { getThemeFromClosestAncestor } from './utils'

// Polymorphic component with forwardable refs types from: https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/

// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
// A more precise version of just React.ComponentPropsWithoutRef on its own
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

type AsProp<C extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React component.
   */
  as?: C
}

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
type InheritableElementProps<
  C extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<C>, Props>

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritableElementProps<C, Props & AsProp<C>>

/** * Utility type to extract the `ref` prop from a polymorphic component */
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']
/** * A wrapper of `PolymorphicComponentProps` that also includes the `ref` * prop for the polymorphic component */
type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> }

interface Props {
  children?: React.ReactNode
  onChange?: (theme: DataTheme) => void
}

export type ThemeProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, Props> & IComponentBaseProps

type ThemeComponent = <C extends React.ElementType = 'div'>(
  props: ThemeProps<C>
) => React.ReactElement | null

const Theme: ThemeComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, dataTheme, onChange, ...props }: ThemeProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'div'

    // Either use provided ref or create a new ref
    const themeRef = useRef<PolymorphicRef<C>>(ref?.current)

    const closestAncestorTheme = getThemeFromClosestAncestor(themeRef)

    // If no theme is provided, use the closest ancestor theme, if no ancestor theme, fallback to default theme (defined in constants)
    const [theme, setTheme] = useState<DataTheme>(
      dataTheme || closestAncestorTheme || defaultTheme
    )

    const handleThemeChange = (theme: DataTheme) => {
      // Fire custom onChange, if provided. ie, user provided function to store theme in session/local storage
      onChange && onChange(theme)
      // Update state/context
      setTheme(theme)
    }

    // Properly handle changes to theme prop on Theme component
    useEffect(() => {
      if (dataTheme !== theme) {
        dataTheme && handleThemeChange(dataTheme)
      }
    }, [dataTheme])

    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <Component {...props} data-theme={theme} ref={themeRef}>
          {children}
        </Component>
      </ThemeContext.Provider>
    )
  }
)

export default Theme
