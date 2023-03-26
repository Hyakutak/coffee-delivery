import { Reducer } from "react";
import { produce } from "immer";
import { CartActionTypes } from "./actions";
import { IProduct } from '../interfaces/IProduct';

export interface IProductsInCart {
    products: IProduct[]
}

export const CartReducer: Reducer<IProductsInCart, any> = (state, action) => {
	switch (action.type) {
	
	case CartActionTypes.ADD_PRODUCT_TO_CART: {
		const product = action.payload.product;

		const {id: actualProductId, amount: productAmount} = product;

		const existingProductIndex = state.products.findIndex((product)=>product.id === actualProductId);

		if(existingProductIndex < 0) {
			return produce(state, (draft)=> {
				draft.products.push(product);
			});
		}
		
		return produce(state, (draft)=> {
			draft.products[existingProductIndex].amount += productAmount;
		});
	}

	default:
		return state;
	}
};