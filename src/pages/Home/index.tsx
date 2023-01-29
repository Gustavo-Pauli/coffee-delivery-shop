import {
  IntroContainer,
  ShopContainer,
  IntroTitle,
  IntroSection,
  ShopSection,
  IntroItemList,
  IntroImg,
} from './styles'
import CoffeeIntro from '../../assets/CoffeeIntro.png'
import IntroBackground from '../../assets/IntroBackground.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <>
      <IntroSection>
        <IntroContainer>
          <div>
            <IntroTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h2>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h2>
            </IntroTitle>
            <IntroItemList>
              <li>
                <div>
                  <ShoppingCart size={'1rem'} weight="fill" />
                </div>
                Compra simples e segura
              </li>
              <li>
                <div>
                  <Package size={'1rem'} weight="fill" />
                </div>
                Embalagem mantém o café intacto
              </li>
              <li>
                <div>
                  <Timer size={'1rem'} weight="fill" />
                </div>
                Entrega rápida e rastreada
              </li>
              <li>
                <div>
                  <Coffee size={'1rem'} weight="fill" />
                </div>
                O café chega fresquinho até você
              </li>
            </IntroItemList>
          </div>
          <div>
            <IntroImg
              src={CoffeeIntro}
              alt="Copo de café de papel com pó e grãos de café em plano de fundo"
            />
          </div>
        </IntroContainer>
        <img src={IntroBackground} alt="" />
      </IntroSection>
      <ShopSection>
        <ShopContainer>
          <h3>Nossos cafés</h3>
          <div>
            <CoffeeCard coffee="Expresso Tradicional" />
            <CoffeeCard coffee="Expresso Americano" />
            <CoffeeCard coffee="Expresso Cremoso" />
            <CoffeeCard coffee="Expresso Gelado" />
            <CoffeeCard coffee="Café com Leite" />
            <CoffeeCard coffee="Latte" />
            <CoffeeCard coffee="Capuccino" />
            <CoffeeCard coffee="Macchiato" />
            <CoffeeCard coffee="Mocaccino" />
            <CoffeeCard coffee="Chocolate Quente" />
            <CoffeeCard coffee="Cubano" />
            <CoffeeCard coffee="Havaiano" />
            <CoffeeCard coffee="Árabe" />
            <CoffeeCard coffee="Irlandês" />
          </div>
        </ShopContainer>
      </ShopSection>
    </>
  )
}
