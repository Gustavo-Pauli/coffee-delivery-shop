import { ChangeEvent, useState } from 'react'
import { MinusButton, PlusButton, StyledInput, Wrapper } from './styles'
import { Plus, Minus } from 'phosphor-react'

// export function NumberInput() {}

// interface NumberInputSpinnerProps {
//   min: number
//   max: number
//   step: number
//   value: number
//   onChange: (() => void) => void
// }

interface NumberInputSpinnerProps {
  value: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

export function NumberInputSpinner({
  min = 1,
  max = 99,
  step = 1,
  value,
  onChange,
}: NumberInputSpinnerProps) {
  const [currentValue, setCurrentValue] = useState(value)

  function handleIncrement() {
    const newValue = currentValue + step
    if (newValue <= max) {
      setCurrentValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  function handleDecrement() {
    const newValue = currentValue - step
    if (newValue >= min) {
      setCurrentValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const isNum = !isNaN(parseInt(event.target.value))

    if (isNum) {
      setCurrentValue(
        Math.min(Math.max(parseInt(event.target.value, 10), min), max),
      )
    } else {
      setCurrentValue(min)
    }
  }

  return (
    <Wrapper>
      <MinusButton onClick={handleDecrement}>
        <Minus weight="bold" size={'0.875rem'} />
      </MinusButton>
      <StyledInput
        value={currentValue}
        onChange={handleInputChange}
        pattern="[0-9]*"
      />
      <PlusButton onClick={handleIncrement}>
        <Plus weight="bold" size={'0.875rem'} />
      </PlusButton>
    </Wrapper>
  )
}
