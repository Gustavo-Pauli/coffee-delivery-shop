import { Action } from '@remix-run/router'
import { Coffee } from '../../@types/coffee'
import { ActionTypes } from './actions'

export interface Product {
  id: string
  name: Coffee
  quantity: number
}

export function cartReducer(state: any, action: any) {
  // state retorna o estado
  // action retorna o objeto enviada pelo dispatch com {type: 'tipo', payload: {...}}
  // console.log('state')
  // console.log(state)
  // console.log('action')
  // console.log(action)

  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      // console.log('chegou no reducer')

      if (
        state.products.some(
          (product: Product) => product.id === action.payload.id,
        )
      ) {
        // console.log('já existe o produto')
        return {
          ...state,
          products: state.products.map((product: Product) => {
            if (product.id === action.payload.id) {
              // console.log('incrementando a quantidade')
              return {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            }
            return product
          }),
        }
      } else {
        // console.log('não existe o produto')
        return {
          ...state,
          products: [
            ...state.products,
            {
              id: action.payload.id,
              name: action.payload.name,
              quantity: action.payload.quantity,
            },
          ],
        }
      }
    }
    case ActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product: Product) => {
          return product.name !== action.payload.name
        }),
      }
    }
    case ActionTypes.MODIFY_PRODUCT_TO_X_QUANTITY: {
      return {
        ...state,
        products: state.products.map((product: Product) => {
          if (product.name !== action.payload.name) {
            return product
          } else {
            return {
              ...product,
              quantity: action.payload.quantity,
            }
          }
        }),
      }
    }
  }

  return state
}
