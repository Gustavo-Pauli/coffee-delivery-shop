import { Footer, Tag, Wrapper, Price } from './styles'
import coffeesData from './../../database/coffeesData.json'

import americanoSrc from './../../assets/coffeeImages/Americano.png'
import arabeSrc from './../../assets/coffeeImages/Árabe.png'
import cafeComLeiteSrc from './../../assets/coffeeImages/Café com Leite.png'
import cafeGeladoSrc from './../../assets/coffeeImages/Café Gelado.png'
import capuccinoSrc from './../../assets/coffeeImages/Capuccino.png'
import chocolateQuenteSrc from './../../assets/coffeeImages/Chocolate Quente.png'
import cubanoSrc from './../../assets/coffeeImages/Cubano.png'
import expressoCremosoSrc from './../../assets/coffeeImages/Expresso Cremoso.png'
import expressoSrc from './../../assets/coffeeImages/Expresso.png'
import havaianoSrc from './../../assets/coffeeImages/Havaiano.png'
import irlandesSrc from './../../assets/coffeeImages/Irlandês.png'
import latteSrc from './../../assets/coffeeImages/Latte.png'
import macchiatoSrc from './../../assets/coffeeImages/Macchiato.png'
import mochaccinoSrc from './../../assets/coffeeImages/Mochaccino.png'

// const ['Expresso Tradicional', 'Expresso Americano', 'Expresso Cremoso', 'Expresso Gelado', 'Café com Leite', 'Latte', 'Capuccino', 'Macchiato', 'Mocaccino', 'Chocolate Quente', 'Cubano', 'Havaiano', 'Árabe', 'Irlandês'] =

type Coffee =
  | 'Expresso Tradicional'
  | 'Expresso Americano'
  | 'Expresso Cremoso'
  | 'Expresso Gelado'
  | 'Café com Leite'
  | 'Latte'
  | 'Capuccino'
  | 'Macchiato'
  | 'Mocaccino'
  | 'Chocolate Quente'
  | 'Cubano'
  | 'Havaiano'
  | 'Árabe'
  | 'Irlandês'

const coffeeImgSrcs = {
  'Expresso Tradicional': expressoSrc,
  'Expresso Americano': americanoSrc,
  'Expresso Cremoso': expressoCremosoSrc,
  'Expresso Gelado': cafeGeladoSrc,
  'Café com Leite': cafeComLeiteSrc,
  Latte: latteSrc,
  Capuccino: capuccinoSrc,
  Macchiato: macchiatoSrc,
  Mocaccino: mochaccinoSrc,
  'Chocolate Quente': chocolateQuenteSrc,
  Cubano: cubanoSrc,
  Havaiano: havaianoSrc,
  Árabe: arabeSrc,
  Irlandês: irlandesSrc,
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <Wrapper>
      <img src={coffeeImgSrcs[coffee]} alt="xícara de café" />
      <Tag>
        {coffeesData[coffee].tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
      <h5>{coffeesData[coffee].name}</h5>
      <p>{coffeesData[coffee].description}</p>
      <Footer>
        <Price>{coffeesData[coffee].price}</Price>
      </Footer>
    </Wrapper>
  )
}
