import {
  Wrapper,
  CompleteOrder,
  SelectedCoffees,
  Address,
  Payment,
  LeftSide,
  RightSide,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  AddressInput,
  AddressInputWrapper,
  AddressInputGroup,
  PaymentTypeButton,
  ButtonRadioGroup,
  ProductList,
  ProductListItem,
  ProductListItemMiddle,
  RemoveButton,
  ProductListItemPrice,
  ConfirmOrderButton,
  SelectedCoffeesFooter,
  OrderFooter,
  OrderFooterInfo,
  OrderFooterTotal,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'
// import { ButtonRadioGroup } from '../../components/ButtonRadioGroup'
import { ButtonRadio } from '../../components/ButtonRadioGroup/ButtonRadio'
import { ProductImage } from '../../components/ProductImage'
import React, { FormEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'
import { NumberInputSpinner } from '../../components/NumberInput'

import coffeesData from '../../database/coffeesData.json'
import { Coffee } from '../../@types/coffee'

export function Checkout() {
  const cart = useContext(CartContext)

  function handleChangeItemQuantity(productName: Coffee, toQuantity: number) {
    cart.modifyProductToXQuantity(productName, toQuantity)
  }

  function handleRemoveProduct(name: Coffee) {
    cart.removeProduct(name)
  }

  function handleFormSubmit(event: FormEvent) {
    // event.preventDefault()
  }

  return (
    <Wrapper>
      {/* <h3>Complete seu pedido</h3> */}
      <form onSubmit={handleFormSubmit}>
        <LeftSide>
          <h1>Complete seu pedido</h1>
          <CompleteOrder>
            <Address>
              <CardHeader>
                <CardHeaderIcon>
                  <MapPinLine size={'100%'} />
                </CardHeaderIcon>
                <CardHeaderTitle>
                  <h2>Endereço de Entrega</h2>
                  <h3>Informe o endereço onde deseja receber seu pedido</h3>
                </CardHeaderTitle>
              </CardHeader>
              <AddressInputWrapper>
                <AddressInput type="text" placeholder="CEP" />
                <AddressInput type="text" placeholder="Rua" />
                <AddressInputGroup>
                  <AddressInput type="text" placeholder="Número" />
                  <AddressInput type="text" placeholder="Complemento" />
                </AddressInputGroup>
                <AddressInputGroup>
                  <AddressInput type="text" placeholder="Bairro" />
                  <AddressInput type="text" placeholder="Cidade" />
                  <AddressInput type="text" placeholder="UF" />
                </AddressInputGroup>
              </AddressInputWrapper>
            </Address>
            <Payment>
              <CardHeader>
                <CardHeaderIcon>
                  <CurrencyDollar size={'100%'} />
                </CardHeaderIcon>
                <CardHeaderTitle>
                  <h2>Pagamento</h2>
                  <h3>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </h3>
                </CardHeaderTitle>
              </CardHeader>
              <ButtonRadioGroup>
                <ButtonRadio id="cartaoDeCredito" name="paymentType">
                  <PaymentTypeButton>
                    <CreditCard size={'1rem'} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </PaymentTypeButton>
                </ButtonRadio>
                <ButtonRadio id="cartaoDeDebito" name="paymentType">
                  <PaymentTypeButton>
                    <Bank size={'1rem'} />
                    <span>CARTÃO DE DÉBITO</span>
                  </PaymentTypeButton>
                </ButtonRadio>
                <ButtonRadio id="dinheiro" name="paymentType">
                  <PaymentTypeButton>
                    <Money size={'1rem'} />
                    <span>DINHEIRO</span>
                  </PaymentTypeButton>
                </ButtonRadio>
              </ButtonRadioGroup>
            </Payment>
          </CompleteOrder>
        </LeftSide>
        <RightSide>
          <h1>Cafés selecionados</h1>
          <SelectedCoffees>
            <ProductList>
              {cart.products.map((product) => (
                <React.Fragment key={product.id}>
                  <ProductListItem>
                    <ProductImage coffeeName={product.name} />
                    <ProductListItemMiddle>
                      <span>{product.name}</span>
                      <div>
                        <NumberInputSpinner
                          value={product.quantity}
                          onChange={(value) =>
                            handleChangeItemQuantity(product.name, value)
                          }
                          height={'2rem'}
                        />
                        <RemoveButton
                          type="button"
                          onClick={() => handleRemoveProduct(product.name)}
                        >
                          <Trash size={'1rem'} />
                          <span>REMOVER</span>
                        </RemoveButton>
                      </div>
                    </ProductListItemMiddle>
                    <ProductListItemPrice>
                      R$ {coffeesData[product.name].price}
                    </ProductListItemPrice>
                  </ProductListItem>
                  <hr />
                </React.Fragment>
              ))}
            </ProductList>
            <OrderFooter>
              <OrderFooterInfo>
                <OrderFooterInfo>
                  <div>Total de items</div>
                  <div>
                    {cart.products
                      .reduce((accumulator, product) => {
                        return (
                          accumulator +
                          product.quantity * +coffeesData[product.name].price
                        )
                      }, 0)
                      .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                  </div>
                </OrderFooterInfo>
                <OrderFooterInfo>
                  <div></div>
                  <div></div>
                </OrderFooterInfo>
                <OrderFooterTotal>
                  <div></div>
                  <div></div>
                </OrderFooterTotal>
              </OrderFooterInfo>
              <ConfirmOrderButton type="submit">
                CONFIRMAR PEDIDO
              </ConfirmOrderButton>
            </OrderFooter>
          </SelectedCoffees>
        </RightSide>
      </form>
    </Wrapper>
  )
}
