import { CityStateButton, Wrapper } from './styles'
import Logo from '../../assets/logo.svg'
import { CartButton } from './CartButton'
import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'

export function Header() {
  const cart = useContext(CartContext)

  return (
    <Wrapper>
      <NavLink to={'/'}>
        <img src={Logo} alt="Coffee delivery logo" />
      </NavLink>

      <div>
        <CityStateButton>
          <MapPin weight="fill" size={'1.375rem'} />
          <span>Porto Alegre, RS</span>
        </CityStateButton>
        <NavLink to={'/checkout'}>
          <CartButton productsCount={cart.products.length} />
        </NavLink>
      </div>
    </Wrapper>
  )
}
