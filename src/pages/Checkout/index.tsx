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
  OrderFooter,
  OrderFooterInfoWrapper,
  OrderFooterInfo,
  OrderFooterTotal,
  AddressInputCEP,
  AddressInputStreet,
  AddressInputNumber,
  AddressInputComplement,
  AddressInputDistrict,
  AddressInputCity,
  AddressInputState,
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
import React, { useContext } from 'react'
import { ButtonRadio } from '../../components/ButtonRadioGroup/ButtonRadio'
import { ProductImage } from '../../components/ProductImage'
import { CartContext } from '../../contexts/CartContext/CartContext'
import { NumberInputSpinner } from '../../components/NumberInput'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import coffeesData from '../../database/coffeesData.json'
import { Coffee } from '../../@types/coffee'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  address: zod.object({
    zipCode: zod
      .number({
        invalid_type_error: 'Tipo inválido',
        required_error: 'Necessário',
      })
      .lte(99999999, 'CEP inválido')
      .gte(10000000, 'CEP inválido'),
    street: zod.string().min(1, { message: 'Necessário' }),
    number: zod.number({ required_error: 'Necessário' }),
    complement: zod.string().optional(),
    district: zod.string().min(1, 'Necessário'),
    city: zod.string().min(1, 'Necessário'),
    state: zod.string().min(1, 'Necessário'),
  }),
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const cart = useContext(CartContext)

  const navigate = useNavigate()

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(schema),
  // })

  function loadDefaultValuesFromLS() {
    const defaultValuesFromLS = localStorage.getItem('@coffee-shop:cart-state')
    if (defaultValuesFromLS) {
      return { address: { ...JSON.parse(defaultValuesFromLS).address } }
    } else {
      return {
        address: {
          zipCode: undefined,
          street: '',
          number: undefined,
          complement: '',
          district: '',
          city: '',
          state: '',
        },
      }
    }
  }

  const defaultValues = loadDefaultValuesFromLS()

  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = checkoutForm

  function handleChangeItemQuantity(productName: Coffee, toQuantity: number) {
    cart.modifyProductToXQuantity(productName, toQuantity)
  }

  function handleRemoveProduct(name: Coffee) {
    cart.removeProduct(name)
  }

  // console.log('CART', cart)

  function handleFormSubmit(data: checkoutFormData) {
    console.log('SUBMITOU!')
    cart.modifyAddress(watch('address'))
    console.log('watch', watch('address'))
    navigate('/checkout/success')
  }

  return (
    <Wrapper>
      {/* <h3>Complete seu pedido</h3> */}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormProvider {...checkoutForm}>
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
                  <AddressInputCEP
                    {...register('address.zipCode', { valueAsNumber: true })}
                    placeholder="CEP"
                  />
                  {/* {errors.cep?.message && <p>{errors.cep?.message.toString()}</p>} */}
                  <AddressInputStreet
                    {...register('address.street')}
                    placeholder="Rua"
                  />
                  <AddressInputGroup>
                    <AddressInputNumber
                      {...register('address.number', { valueAsNumber: true })}
                      placeholder="Número"
                    />
                    <AddressInputComplement
                      {...register('address.complement')}
                      placeholder="Complemento"
                    />
                  </AddressInputGroup>
                  <AddressInputGroup>
                    <AddressInputDistrict
                      {...register('address.district')}
                      placeholder="Bairro"
                    />
                    <AddressInputCity
                      {...register('address.city')}
                      placeholder="Cidade"
                    />
                    <AddressInputState
                      {...register('address.state')}
                      placeholder="UF"
                    />
                  </AddressInputGroup>
                  {/* {console.log(errors)} */}
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
                <OrderFooterInfoWrapper>
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
                    <div>Entrega</div>
                    <div>R$ 3,50</div>
                  </OrderFooterInfo>
                  <OrderFooterTotal>
                    <div>Total</div>
                    <div>
                      {cart.products
                        .reduce((accumulator, product) => {
                          return (
                            accumulator +
                            product.quantity * +coffeesData[product.name].price
                          )
                        }, 3.5)
                        .toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                    </div>
                  </OrderFooterTotal>
                </OrderFooterInfoWrapper>
                <ConfirmOrderButton type="submit">
                  CONFIRMAR PEDIDO
                </ConfirmOrderButton>
              </OrderFooter>
            </SelectedCoffees>
          </RightSide>
        </FormProvider>
      </form>
    </Wrapper>
  )
}
