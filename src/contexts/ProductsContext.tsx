import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ProductsReducer } from "../reducers/products/reducer";
import { addNewProductToCartAction, deletedProductToCartAction, changeAmountProductToCartAction } from "../reducers/products/actions";

export interface NewProductData {
    id: number,
    name: string,
    image: string,
    price: number,
    amount: number
}

export interface userInfoAddress {
    cep: number,
    logradouro: string,
    bairro: string,
    complemento: string,
    localidade: string,
    uf: string,
    number: number
}

interface ProductsContextType {
    products: NewProductData[];
    userInfo: userInfoAddress;
    handleAddProductToCart: (product: NewProductData) => void;
    handleDeletedProductToCart: (id: number) => void;
    handleAmountProductToCart: (id: number, amount: number) => void
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [cartState, dispatch] = useReducer(ProductsReducer,
        { 
            products: [],
            userInfo: {},
            paymentMethod: String
        },
        (initalState) => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
            if(storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initalState;
        },
    );

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [cartState]);

    const { products, userInfo } = cartState;

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

    function handleAmountProductToCart(id: number, amount: number) {
        dispatch(changeAmountProductToCartAction(id, amount));
    }

    return (
        <ProductsContext.Provider value={{ 
                products, 
                userInfo,
                handleAddProductToCart, 
                handleDeletedProductToCart,
                handleAmountProductToCart
            }}>
            { children }
        </ProductsContext.Provider>
    );
}