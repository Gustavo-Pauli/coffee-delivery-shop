import { createContext, ReactNode, useReducer } from 'react'
import { Coffee } from '../../@types/coffee'
import { addProductAction } from '../../reducers/cart/actions'
import { cartReducer, Product } from '../../reducers/cart/reducer'

interface CartContextType {
  products: Product[]
  address: {
    zipCode: string
    street: string
    number: string
    complement: string
    district: string
    city: string
    state: string
  }
  paymentMethod: null
  addProduct: (id: string, name: Coffee, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

const reducerInitialValues = {
  products: [],
  address: {
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  },
  paymentMethod: null,
}

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, reducerInitialValues) // TODO add init prop to load localstorage

  const { products, address, paymentMethod } = cartState
  console.log(cartState)

  // dispatch({
  //   type: 'test',
  // })

  function addProduct(id: string, name: Coffee, quantity: number) {
    dispatch(addProductAction(id, name, quantity))
  }

  return (
    <CartContext.Provider
      value={{ products, address, paymentMethod, addProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
