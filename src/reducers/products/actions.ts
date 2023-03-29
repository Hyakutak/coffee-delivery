import { NewProductData, userInfoAddress } from '../../contexts/ProductsContext';

export enum ActionTypes {
	ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
	DELETED_PRODUCT_TO_CART = 'DELETED_PRODUCT_TO_CART',
	CHANGE_PRODUCT_AMOUNT_TO_CARD = 'CHANGE_PRODUCT_AMOUNT_TO_CARD',
	ADD_USER_INFO = 'ADD_USER_INFO',
	FINISH_ORDER = 'FINISH_ORDER',
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

export function addUserAddressInfoAction(userInfo: userInfoAddress) {
	return {
		type: ActionTypes.ADD_USER_INFO,
		payload: {
			userInfo,
		}
	}
}

export function finishOrderAction() {
	return {
		type: ActionTypes.FINISH_ORDER,
	};
}
