import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Wrapper,
  ImageSide,
  InfoSide,
  InfoHeader,
  InfoCard,
  CardElement,
  CardElementText,
  CardElementLocalIcon,
  CardElementTimeIcon,
  CardElementPaymentIcon,
} from './styles'
import illustration from './../../../assets/CompleatedOrderIllustration.svg'
import { CartReducerInterface } from '../../../contexts/CartContext/CartContext'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function Success() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // redirect to index if did not submitted cart form
    if (location.state === null || location.state === undefined) {
      navigate('/checkout', { replace: true })
    }
  })

  const order: CartReducerInterface = location.state.data

  function paymentMethodToString(
    paymentMethod: CartReducerInterface['paymentMethod'],
  ) {
    switch (paymentMethod) {
      case 'cartaoDeCredito': {
        return 'Cartão de Crédito'
      }
      case 'cartaoDeDebito': {
        return 'Cartão de Débito'
      }
      case 'dinheiro': {
        return 'Dinheiro'
      }
    }
  }

  function capitalizeWords(str: string) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <Wrapper>
      <InfoSide>
        <InfoHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </InfoHeader>
        <InfoCard>
          <CardElement>
            <CardElementLocalIcon>
              <MapPin weight="fill" />
            </CardElementLocalIcon>
            <CardElementText>
              <p>
                Entrega em{' '}
                <strong>
                  {capitalizeWords(order.address.street)},{' '}
                  {order.address.number}
                </strong>
              </p>
              <p>
                {capitalizeWords(order.address.district)} -{' '}
                {capitalizeWords(order.address.city)},{' '}
                {order.address.state.toUpperCase()}
              </p>
            </CardElementText>
          </CardElement>
          <CardElement>
            <CardElementTimeIcon>
              <Timer weight="fill" />
            </CardElementTimeIcon>
            <CardElementText>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </CardElementText>
          </CardElement>
          <CardElement>
            <CardElementPaymentIcon>
              <CurrencyDollar />
            </CardElementPaymentIcon>
            <CardElementText>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethodToString(order.paymentMethod)}</strong>
              </p>
            </CardElementText>
          </CardElement>
        </InfoCard>
      </InfoSide>
      <ImageSide>
        <img src={illustration} alt="delivery man in a motorcycle" />
      </ImageSide>
    </Wrapper>
  )
}
