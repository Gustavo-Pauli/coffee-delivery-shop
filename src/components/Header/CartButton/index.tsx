import { ButtonWrapper, ProductCounter } from './styles'
import { ShoppingCart } from 'phosphor-react'

// TODO create context for products

interface CartButtonProps {
  productsCount: number
}

export function CartButton({ productsCount }: CartButtonProps) {
  return (
    <ButtonWrapper>
      {productsCount ? <ProductCounter>{productsCount}</ProductCounter> : ''}
      <ShoppingCart weight="fill" size={'1.375rem'} />
    </ButtonWrapper>
  )
}
