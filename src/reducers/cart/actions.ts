import { Coffee } from '../../@types/coffee'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export function addProductAction(id: string, name: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      id,
      name,
      quantity,
    },
  }
}
