import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ProductsReducer } from "../reducers/products/reducer";
import { addNewProductToCartAction, 
         deletedProductToCartAction, 
         changeAmountProductToCartAction,
         addUserAddressInfoAction,
         finishOrderAction } from "../reducers/products/actions";

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
    localidade: string,
    uf: string,
}

interface paymentMethod {
    isCredit: boolean,
    isDebit: boolean,
    isMoney: boolean
}

interface ProductsContextType {
    products: NewProductData[];
    userInfo: userInfoAddress;
    paymentMethod: paymentMethod;
    handleAddProductToCart: (product: NewProductData) => void;
    handleDeletedProductToCart: (id: number) => void;
    handleAmountProductToCart: (id: number, amount: number) => void;
    handleAddAddressUser: (userInfo: userInfoAddress) => void;
    handleFinishOrder: () => void;
    handleClickModifiedPaymentMethod: (event: HTMLButtonElement) => void
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
        },
        (initalState) => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
            if(storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initalState;
        },
    );

    const [paymentMethod, setPaymentMethod] = useState({
        isCredit: true,
        isDebit: false,
        isMoney: false
    });

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

    function handleAddAddressUser(data: userInfoAddress) {
        const InfoAddress = {
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
        }

        dispatch(addUserAddressInfoAction(InfoAddress))
    }

    function handleFinishOrder() {
        dispatch(finishOrderAction());
    }

    function handleClickModifiedPaymentMethod(event: HTMLButtonElement) {
        switch (event.value) {
            case 'isCredit': {
                return setPaymentMethod({
                    isCredit: true,
                    isDebit: false,
                    isMoney: false
                });
            }
            case 'isDebit': {
                return setPaymentMethod({
                    isCredit: false,
                    isDebit: true,
                    isMoney: false
                });
            }
            case 'isMoney': {
                return setPaymentMethod({
                    isCredit: false,
                    isDebit: false,
                    isMoney: true
                });
            }
        }
    }

    return (
        <ProductsContext.Provider value={{ 
                products, 
                userInfo,
                paymentMethod,
                handleAddProductToCart, 
                handleDeletedProductToCart,
                handleAmountProductToCart,
                handleAddAddressUser,
                handleFinishOrder,
                handleClickModifiedPaymentMethod
            }}>
            { children }
        </ProductsContext.Provider>
    );
}