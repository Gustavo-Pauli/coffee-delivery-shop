import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Coffee } from '../../@types/coffee'
import {
  addOrIncreaseProductAction,
  removeProductAction,
  modifyProductToXQuantityAction,
} from '../../reducers/cart/actions'
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
  addOrIncreaseProduct: (id: string, name: Coffee, quantity: number) => void
  removeProduct: (name: Coffee) => void
  modifyProductToXQuantity: (name: Coffee, quantity: number) => void
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

// localStorage.getItem
// JSON.parse(storedStateAsJSON)

function initReducer(initialArg: typeof reducerInitialValues) {
  const productsStoredStateAsJSON = localStorage.getItem(
    '@coffee-shop:cart-state-products-1.0.0',
  )

  if (productsStoredStateAsJSON) {
    // JSON.parse(storedStateAsJSON)
    return {
      products: JSON.parse(productsStoredStateAsJSON),
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
    const stateJSON = JSON.stringify(cartState.products)

    localStorage.setItem('@coffee-shop:cart-state-products-1.0.0', stateJSON)
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

  return (
    <CartContext.Provider
      value={{
        products,
        address,
        paymentMethod,
        addOrIncreaseProduct,
        removeProduct,
        modifyProductToXQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
