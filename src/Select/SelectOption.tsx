import React from 'react'

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>

const SelectOption = ({
  children,
  ...props
}: SelectOptionProps): JSX.Element => {
  return (
    <option {...props}>
      {children}
    </option>
  )
}

export default SelectOption
