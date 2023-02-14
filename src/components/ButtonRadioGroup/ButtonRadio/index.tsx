import React, { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'
import { Wrapper } from './styles'

interface ButtonRadioProps extends PropsWithChildren<{}> {
  id: string
  name: string
}

export const ButtonRadio = ({ children, id, name }: ButtonRadioProps) => {
  const formContext = useFormContext()
  return (
    <Wrapper>
      <input type="radio" id={id} name={name} />
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </Wrapper>
  )
}
