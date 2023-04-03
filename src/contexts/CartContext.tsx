import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ProductsReducer } from "../reducers/Cart/reducer";
import { addNewProductToCartAction, 
         deletedProductToCartAction, 
         changeAmountProductToCartAction,
         finishOrderAction } from "../reducers/Cart/actions";
import { IProductCart } from "../interfaces/IProductCart";
import { ICartContextType } from "../interfaces/ICartContext";

interface ProductsContextProviderProps {
    children: ReactNode
}

const cartEmpty: ICartContextType = {
    products: [],
    formPayment: '',
    handleAddProductToCart: () => {},
    handleDeletedProductToCart: () => {},
    handleAmountProductToCart: () => {},
    handleFinishOrder: () => {},
    handleClickModifiedFormPayment: () => {}
}

export const ProductsContext = createContext<ICartContextType>(cartEmpty);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [cartState, dispatch] = useReducer(ProductsReducer, cartEmpty,
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

    const { products } = cartState;

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