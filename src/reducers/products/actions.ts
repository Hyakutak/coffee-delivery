import { NewProductData } from '../../contexts/ProductsContext';

export enum ActionTypes {
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	DELETED_PRODUCT_TO_CART = 'DELETED_PRODUCT_TO_CART',
	CHANGE_PRODUCT_AMOUNT_TO_CARD = 'CHANGE_PRODUCT_AMOUNT_TO_CARD',
}

export function addNewProductToCartAction(product: NewProductData) {
	return {
		type: ActionTypes.ADD_PRODUCT_TO_CART,
		payload: {
			product,
		},
	};
}

export function deletedProductToCartAction(id: number) {
	return {
		type: ActionTypes.DELETED_PRODUCT_TO_CART,
		payload: {
			id,
		}
	}
}

export function changeAmountProductToCartAction(id: number, amount: number) {
	return {
		type: ActionTypes.CHANGE_PRODUCT_AMOUNT_TO_CARD,
		payload: {
			id,
			amount
		}
	}
}
