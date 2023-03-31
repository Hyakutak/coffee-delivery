import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ProductsReducer } from "../reducers/Cart/reducer";
import { addNewProductToCartAction, 
         deletedProductToCartAction, 
         changeAmountProductToCartAction,
         finishOrderAction } from "../reducers/Cart/actions";
import { IProductCart } from "../interfaces/IProductCart";

interface ProductsContextType {
    products: IProductCart[];
    formPayment: string;
    handleAddProductToCart: (product: IProductCart) => void;
    handleDeletedProductToCart: (id: number) => void;
    handleAmountProductToCart: (id: number, amount: number) => void;
    handleFinishOrder: () => void;
    handleClickModifiedFormPayment: (method: string) => void;
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [cartState, dispatch] = useReducer(ProductsReducer,
        { 
            products: [],
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
            if(storedStateAsJSON) return JSON.parse(storedStateAsJSON);
            return initialState;
        },
    );
    const [formPayment, setFormPayment] = useState<string>('');

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [cartState]);

    const { products} = cartState;

    function handleAddProductToCart(data: IProductCart) {
        const newProduct = { ...data }
        dispatch(addNewProductToCartAction(newProduct));
    }

    function handleDeletedProductToCart(id: number) {
        dispatch(deletedProductToCartAction(id));
    }

    function handleAmountProductToCart(id: number, amount: number) {
        dispatch(changeAmountProductToCartAction(id, amount));
    }

    function handleFinishOrder() {
        dispatch(finishOrderAction());
    }

    function handleClickModifiedFormPayment(method: string) {
        setFormPayment(method);
    }

    return (
        <ProductsContext.Provider value={{ 
                products, 
                formPayment,
                handleAddProductToCart, 
                handleDeletedProductToCart,
                handleAmountProductToCart,
                handleFinishOrder,
                handleClickModifiedFormPayment,
            }}>
            { children }
        </ProductsContext.Provider>
    );
}