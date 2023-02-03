import { PropsWithChildren } from 'react'

export const ButtonRadioGroup = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div role="radiogroup" className="radio-group">
      {children}
    </div>
  )
}
