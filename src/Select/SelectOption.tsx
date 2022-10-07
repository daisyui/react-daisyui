import React from 'react'

export type SelectOptionProps<T> = Omit<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  'value'
> & {
  value: T
}

const SelectOption = <T extends string | number | undefined>({
  value,
  children,
  ...props
}: SelectOptionProps<T>): JSX.Element => {
  return (
    <option 
      {...props} 
      value={value}
    >
      {children}
    </option>
  )
}

export default SelectOption
