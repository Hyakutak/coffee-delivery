import { IProduct } from '../interfaces/IProduct';

export enum CartActionTypes {
    ADD_PRODUCT_TO_CART  = "ADD_PRODUCT_TO_CART"
}

export function addNewProductToCart(product: IProduct) {
	return {
		type: CartActionTypes.ADD_PRODUCT_TO_CART,
		payload: {
			product,
		},
	};
}