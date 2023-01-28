import expresso from '../../assets/coffeeImages/Expresso.png'
import { Footer, Tag, Wrapper, Price } from './styles'

export function CoffeeCard() {
  return (
    <Wrapper>
      <img src={expresso} alt="xícara de café" />
      <Tag>
        <span>TRADICIONAL</span>
      </Tag>
      <h5>Expresso Tradicional</h5>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Footer>
        <Price>9,90</Price>
      </Footer>
    </Wrapper>
  )
}
