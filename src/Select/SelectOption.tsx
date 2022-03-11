import React, { ReactNode } from 'react'

export type SelectOptionProps<T> = {
  selectedValue?: T
  value: T
  children: ReactNode | ReactNode[]
}

const SelectOption = <T extends string | number | undefined>({
  selectedValue,
  value,
  children,
}: SelectOptionProps<T>): JSX.Element => {
  return <option selected={value === selectedValue}>{children}</option>
}

export default SelectOption
