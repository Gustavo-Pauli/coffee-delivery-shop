import { ButtonWrapper } from './styles'
import { ShoppingCart } from 'phosphor-react'

// TODO create context for products

export function CartButton() {
  return (
    <ButtonWrapper>
      <ShoppingCart weight="fill" size={'1.375rem'} />
    </ButtonWrapper>
  )
}
