import { Coffee } from '../../@types/coffee'
import { CartContextType } from '../../contexts/CartContext/CartContext'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  MODIFY_PRODUCT_TO_X_QUANTITY = 'MODIFY_PRODUCT_TO_X_QUANTITY',
  MODIFY_ADDRESS = 'MODIFY_ADDRESS',
  CLEAR_CART = 'CLEAR_CART',
}

export function addOrIncreaseProductAction(
  id: string,
  name: Coffee,
  quantity: number,
) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      id,
      name,
      quantity,
    },
  }
}

export function removeProductAction(name: Coffee) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      name,
    },
  }
}

export function modifyProductToXQuantityAction(name: Coffee, quantity: number) {
  return {
    type: ActionTypes.MODIFY_PRODUCT_TO_X_QUANTITY,
    payload: {
      name,
      quantity,
    },
  }
}

export function modifyAddressAction(address: CartContextType['address']) {
  return {
    type: ActionTypes.MODIFY_ADDRESS,
    payload: {
      address,
    },
  }
}
