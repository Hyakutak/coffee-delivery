import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ProductsReducer } from "../reducers/products/reducer";
import { addNewProductToCartAction, 
         deletedProductToCartAction, 
         changeAmountProductToCartAction,
         addUserAddressInfoAction,
         finishOrderAction,
         changeNumberAddressUser,
         changeComplementAddressUser } from "../reducers/products/actions";

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

interface ProductsContextType {
    products: NewProductData[];
    userInfo: userInfoAddress;
    formPayment: string;
    numberAddress: number;
    handleAddProductToCart: (product: NewProductData) => void;
    handleDeletedProductToCart: (id: number) => void;
    handleAmountProductToCart: (id: number, amount: number) => void;
    handleAddAddressUser: (userInfo: userInfoAddress) => void;
    handleFinishOrder: () => void;
    handleClickModifiedFormPayment: (method: string) => void;
    handleChangeNumberAddress: (num: number) => void;
    handleChangeComplementAddress: (complement: string) => void;
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
            numberAddress: 0,
            complementUser: 'Casa'
        },
        (initalState) => {
            const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
            if(storedStateAsJSON) return JSON.parse(storedStateAsJSON);
            return initalState;
        },
    );
    const [formPayment, setFormPayment] = useState<string>('');

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }, [cartState]);

    const { products, userInfo, numberAddress } = cartState;

    function handleAddProductToCart(data: NewProductData) {
        const newProduct = { ...data }
        dispatch(addNewProductToCartAction(newProduct));
    }

    function handleDeletedProductToCart(id: number) {
        dispatch(deletedProductToCartAction(id));
    }

    function handleAmountProductToCart(id: number, amount: number) {
        dispatch(changeAmountProductToCartAction(id, amount));
    }

    function handleAddAddressUser(data: userInfoAddress) {
        const InfoAddress = { ...data }
        dispatch(addUserAddressInfoAction(InfoAddress))
    }

    function handleFinishOrder() {
        dispatch(finishOrderAction());
    }

    function handleClickModifiedFormPayment(method: string) {
        setFormPayment(method);
    }

    function handleChangeNumberAddress(num: number) {
        dispatch(changeNumberAddressUser(num));
    }

    function handleChangeComplementAddress(complement: string) {
        dispatch(changeComplementAddressUser(complement));
    }

    return (
        <ProductsContext.Provider value={{ 
                products, 
                userInfo,
                formPayment,
                numberAddress,
                handleAddProductToCart, 
                handleDeletedProductToCart,
                handleAmountProductToCart,
                handleAddAddressUser,
                handleFinishOrder,
                handleClickModifiedFormPayment,
                handleChangeNumberAddress,
                handleChangeComplementAddress
            }}>
            { children }
        </ProductsContext.Provider>
    );
}