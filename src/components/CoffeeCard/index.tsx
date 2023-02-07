import {
  Footer,
  Tag,
  Wrapper,
  Price,
  AddToCartButton,
  FooterRightSide,
} from './styles'
import coffeesData from './../../database/coffeesData.json'
import { NumberInputSpinner } from '../NumberInput'
import React, { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext/CartContext'

import { Coffee } from '../../@types/coffee'
import { ProductImage } from '../ProductImage'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addOrIncreaseProduct } = useContext(CartContext)
  const [inputSpinnerValue, setInputSpinnerValue] = useState(1)

  function handleAddProductToCart(/* event: React.MouseEvent<HTMLButtonElement> */) {
    addOrIncreaseProduct(
      coffeesData[coffee].id,
      coffeesData[coffee].name as Coffee,
      inputSpinnerValue,
    )
  }

  return (
    <Wrapper>
      <ProductImage coffeeName={coffee} />
      <Tag>
        {coffeesData[coffee].tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
      <h5>{coffeesData[coffee].name}</h5>
      <p>{coffeesData[coffee].description}</p>
      <Footer>
        <Price>{coffeesData[coffee].price}</Price>
        <FooterRightSide>
          <NumberInputSpinner
            value={inputSpinnerValue}
            onChange={setInputSpinnerValue}
          />
          <AddToCartButton onClick={handleAddProductToCart}>
            <ShoppingCart weight="fill" size={22} />
          </AddToCartButton>
        </FooterRightSide>
      </Footer>
    </Wrapper>
  )
}
