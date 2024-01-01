import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { useState } from 'react'
import { render, screen } from '@testing-library/react'
import Select from './index'
import userEvent from '@testing-library/user-event'
import { SelectProps } from './Select'
import { ComponentColor, ComponentSize } from '../types'
import Checkbox from '../Checkbox'

const TestComponent = (props?: Omit<SelectProps, 'children'>) => {
  return (
    <Select {...props}>
      <Select.Option value="" disabled>
        Pick your favorite Simpson
      </Select.Option>
      <Select.Option value="Homer">Homer</Select.Option>
      <Select.Option value="Marge">Marge</Select.Option>
      <Select.Option value="Bart">Bart</Select.Option>
      <Select.Option value="Lisa">Lisa</Select.Option>
      <Select.Option value="Maggie">Maggie</Select.Option>
    </Select>
  )
}

const ControlledTestComponent = (props?: Omit<SelectProps, 'children'>) => {
  const [value, setValue] = useState(props?.value)

  return (
    <TestComponent
      {...props}
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
    />
  )
}

describe('Select', () => {
  it('Should render', () => {
    render(<TestComponent />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('Should have first option as value by default', () => {
    render(<TestComponent />)
    expect(screen.getByRole('combobox')).toHaveValue('Homer')
  })

  it('Should get focused on tab key press', async () => {
    render(<TestComponent />)
    await userEvent.tab()
    expect(screen.getByRole('combobox')).toHaveFocus()
  })

  it('Should change selected on option click', async () => {
    render(<TestComponent />)
    await userEvent.selectOptions(screen.getByRole('combobox'), ['Maggie'])
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)
      if (o.label === 'Maggie') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it('(disabled) Should not change selected on click', async () => {
    render(<TestComponent disabled />)
    await userEvent.selectOptions(screen.getByRole('combobox'), ['Maggie'])
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)
      if (o.label === 'Homer') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it('(controlled) Should change selected on option click', async () => {
    render(<ControlledTestComponent />)
    await userEvent.selectOptions(screen.getByRole('combobox'), ['Maggie'])
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)

      if (o.label === 'Maggie') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it('(controlled + disabled) Should not change selected on click', async () => {
    render(<ControlledTestComponent value="Bart" disabled />)
    await userEvent.selectOptions(screen.getByRole('combobox'), ['Maggie'])
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)
      if (o.label === 'Bart') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it('Should change selected by keyboard', async () => {
    render(<TestComponent />)
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Enter]')
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)
      if (o.label === 'Homer') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it('Should change selected based on value prop', () => {
    render(<ControlledTestComponent value="Bart" />)
    ;(screen.getAllByRole('option') as HTMLOptionElement[]).forEach((o) => {
      expect(o).toBeInstanceOf(HTMLOptionElement)

      if (o.label === 'Bart') {
        expect(o.selected).toBeTruthy()
      } else {
        expect(o.selected).toBeFalsy()
      }
    })
  })

  it.each(['xs', 'sm', 'md', 'lg'] satisfies ComponentSize[])(
    'Should render correct size based on size prop',
    (size) => {
      render(<TestComponent size={size} />)
      expect(screen.getByRole('combobox')).toHaveClass(`select-${size}`)
    }
  )

  it.each([
    'primary',
    'secondary',
    'accent',
    'ghost',
    'info',
    'success',
    'warning',
    'error',
  ] satisfies ComponentColor[])(
    'Should render correct color based on color prop',
    (color) => {
      render(<TestComponent color={color} />)
      expect(screen.getByRole('combobox')).toHaveClass(`select-${color}`)
    }
  )

  it('Should not render border class if bordered prop value is false', () => {
    render(<TestComponent bordered={false} />)
    expect(screen.getByRole('combobox')).not.toHaveClass('select-bordered')
  })

  it('Should render class based on className prop', () => {
    const testClass = '123asd123asd'
    render(<TestComponent className={testClass} />)
    expect(screen.getByRole('combobox')).toHaveClass(testClass)
  })
  it('Should render single item', () => {
    render(
      <Select>
        <Select.Option value="" disabled>
          Single Item
        </Select.Option>
      </Select>
    )
  })
  it('#413', () => {
    const options = [
      {
        label: 'a',
        value: 'a',
        disabled: false,
      },
      {
        label: 'b',
        value: 'b',
        disabled: false,
      },
      {
        label: 'c',
        value: 'c',
        disabled: false,
      },
    ]
    render(
      <Select>
        <Select.Option value="" disabled>
          Select Item
        </Select.Option>
        {options.map((o) => (
          <Select.Option key={o.label} value={o.value} disabled={o.disabled}>
            {o.label}
          </Select.Option>
        ))}
      </Select>
    )
  })
})
