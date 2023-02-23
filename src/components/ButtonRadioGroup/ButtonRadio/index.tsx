import React, { PropsWithChildren, useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CartContext } from '../../../contexts/CartContext/CartContext'
import { Wrapper } from './styles'

interface ButtonRadioProps extends PropsWithChildren<{}> {
  id: string
  name: string
}

export const ButtonRadio = ({ children, id, name }: ButtonRadioProps) => {
  const { register } = useFormContext()
  // const cart = useContext(CartContext)

  return (
    <Wrapper>
      <input
        {...register('paymentMethod')}
        type="radio"
        id={id}
        name={name}
        value={id}
      />
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </Wrapper>
  )
}
