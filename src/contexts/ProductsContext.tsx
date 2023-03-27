import { createContext, ReactNode, useReducer } from "react";
import { ProductsReducer } from "../reducers/products/reducer";
import { addNewProductToCartAction, deletedProductToCartAction } from "../reducers/products/actions";

export interface NewProductData {
    id: number,
    name: string,
    image: string,
    price: number,
    amount: number
}

interface ProductsContextType {
    products: NewProductData[];
    handleAddProductToCart: (product: NewProductData) => void;
    handleDeletedProductToCart: (id: number) => void
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [cartState, dispatch] = useReducer(ProductsReducer,
        { products: [] },
    );

    const { products } = cartState;

    function handleAddProductToCart(data: NewProductData) {

        const newProduct = {
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            amount: data.amount
        }

        dispatch(addNewProductToCartAction(newProduct));
    }

    function handleDeletedProductToCart(id: number) {
        dispatch(deletedProductToCartAction(id));
    }

    return (
        <ProductsContext.Provider value={{ 
                products, 
                handleAddProductToCart, 
                handleDeletedProductToCart
            }}>
            { children }
        </ProductsContext.Provider>
    );
}