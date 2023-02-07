import { Coffee } from '../../@types/coffee'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  MODIFY_PRODUCT_TO_X_QUANTITY = 'MODIFY_PRODUCT_TO_X_QUANTITY',
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
