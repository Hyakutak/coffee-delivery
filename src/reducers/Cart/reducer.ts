import { ActionTypes } from "./actions";
import { IProductCart } from "../../interfaces/IProductCart";
import produce from "immer";


interface IProductsInCart {
    products: IProductCart[];
}

export function ProductsReducer(state: IProductsInCart, action: any) {
	switch (action.type) {
	
		case ActionTypes.ADD_PRODUCT_TO_CART: {
			const currentProductIndex = state.products.findIndex((product) => { return product.id === action.payload.product.id });

			if(currentProductIndex < 0) {
				return produce(state, (draft) => {
					draft.products.push(action.payload.product);
				});
			}

			return produce(state, (draft) => {
				draft.products[currentProductIndex].amount = draft.products[currentProductIndex].amount + action.payload.product.amount;
			});
		}

		case ActionTypes.DELETED_PRODUCT_TO_CART: {
			return produce(state, (draft) => {
				draft.products = draft.products.filter((product) => product.id !== action.payload.id);
			});
		}

		case ActionTypes.CHANGE_PRODUCT_AMOUNT_TO_CARD: {
			const currentProductIndex = state.products.findIndex((product) => { return product.id === action.payload.id });

			if(currentProductIndex < 0) {
				return state;
			}

			if(action.payload.amount <= 0) {
				return state;
			}

			return produce(state, (draft) => {
				draft.products[currentProductIndex].amount = action.payload.amount;
			});
		}

		case ActionTypes.FINISH_ORDER: {
			return produce(state, (draft) => {
				draft.products.splice(0, draft.products.length);
			});
		}

		default:
			return state;
	}
};