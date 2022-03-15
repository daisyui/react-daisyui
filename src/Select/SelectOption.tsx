import React from 'react'

export type SelectOptionProps<T> = Omit<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  'value'
> & {
  selectedValue?: T
  value: T
}

const SelectOption = <T extends string | number | undefined>({
  selectedValue,
  value,
  children,
  ...props
}: SelectOptionProps<T>): JSX.Element => {
  return (
    <option {...props} selected={value === selectedValue}>
      {children}
    </option>
  )
}

export default SelectOption
