import { CityStateButton, Wrapper } from './styles'
import Logo from '../../assets/logo.svg'
import { CartButton } from './CartButton'
import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <Wrapper>
      <img src={Logo} alt="Coffee delivery logo" />

      <div>
        <CityStateButton>
          <MapPin weight="fill" size={'1.375rem'} />
          <span>Porto Alegre, RS</span>
        </CityStateButton>
        <NavLink to={'/checkout'}>
          <CartButton />
        </NavLink>
      </div>
    </Wrapper>
  )
}
