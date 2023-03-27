import { ActionTypes } from "./actions";
import { NewProductData } from "../../contexts/ProductsContext";

export interface IProductsInCart {
    products: NewProductData[]
}

export function ProductsReducer(state: IProductsInCart, action: any) {
	switch (action.type) {
	
		case ActionTypes.ADD_PRODUCT_TO_CART: {
			return {
				...state.products,
				products: [...state.products, action.payload.product]
			}
		}

		case ActionTypes.DELETED_PRODUCT_TO_CART: {
			return {
				...state.products,
				products: state.products.filter((product) => product.id !== action.payload.id)
			}
		}

		default:
			return state;
	}
};