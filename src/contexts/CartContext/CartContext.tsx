import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee } from '../../@types/coffee'
import {
  addOrIncreaseProductAction,
  removeProductAction,
  modifyProductToXQuantityAction,
  modifyAddressAction,
} from '../../reducers/cart/actions'
import { cartReducer, Product } from '../../reducers/cart/reducer'

export interface CartContextType {
  products: Product[]
  address: {
    zipCode: number
    street: string
    number: number
    complement?: string
    district: string
    city: string
    state: string
  }
  paymentMethod: null
  addOrIncreaseProduct: (id: string, name: Coffee, quantity: number) => void
  removeProduct: (name: Coffee) => void
  modifyProductToXQuantity: (name: Coffee, quantity: number) => void
  modifyAddress: (address: CartContextType['address']) => void
}

export const CartContext = createContext({} as CartContextType)

const reducerInitialValues = {
  products: [],
  address: {
    zipCode: null,
    street: '',
    number: null,
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

// localStorage.getItem
// JSON.parse(storedStateAsJSON)

function initReducer(initialArg: typeof reducerInitialValues) {
  const storedStateAsJSON = localStorage.getItem('@coffee-shop:cart-state')

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
    //   return {
    //     products: JSON.parse(productsStoredStateAsJSON),
    //     address: {
    //       zipCode: '',
    //       street: '',
    //       number: '',
    //       complement: '',
    //       district: '',
    //       city: '',
    //       state: '',
    //     },
    //     paymentMethod: null,
    //   }
  } else {
    return initialArg
  }
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    reducerInitialValues,
    initReducer,
  ) // TODO add init prop to load localstorage

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-shop:cart-state', stateJSON)
  }, [cartState])

  const { products, address, paymentMethod } = cartState

  function addOrIncreaseProduct(id: string, name: Coffee, quantity: number) {
    dispatch(addOrIncreaseProductAction(id, name, quantity))
  }

  function removeProduct(name: Coffee) {
    dispatch(removeProductAction(name))
  }

  function modifyProductToXQuantity(name: Coffee, quantity: number) {
    dispatch(modifyProductToXQuantityAction(name, quantity))
  }

  function modifyAddress(address: CartContextType['address']) {
    dispatch(modifyAddressAction(address))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        address,
        paymentMethod,
        addOrIncreaseProduct,
        removeProduct,
        modifyProductToXQuantity,
        modifyAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
