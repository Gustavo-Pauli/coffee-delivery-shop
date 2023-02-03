import { Coffee } from '../../@types/coffee'

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

interface CoffeeImageProps {
  coffeeName: Coffee
}

export function ProductImage({ coffeeName }: CoffeeImageProps) {
  return <img src={coffeeImgSrcs[coffeeName]} alt="xícara de café" />
}
