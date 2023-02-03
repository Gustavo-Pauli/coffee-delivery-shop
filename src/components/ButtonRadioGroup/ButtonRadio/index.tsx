import React, { PropsWithChildren } from 'react'
import { Wrapper } from './styles'

export const ButtonRadio = ({
  children,
  id,
  name,
}: PropsWithChildren<{ id: string; name: string }>) => {
  return (
    <Wrapper>
      <input type="radio" id={id} name={name} />
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </Wrapper>
  )
}
