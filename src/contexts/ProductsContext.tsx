import { createContext, ReactNode, useState, useEffect } from "react";
import { IProduct } from '../interfaces/IProduct';
import Api from '../services/Api';

interface ProductsContextType {
    listProducts?: IProduct[]
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [listProducts, setListProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        Api
         .get("products.json")
         .then((response) => setListProducts(response.data.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    return (
        <ProductsContext.Provider value={{ listProducts }}>
            { children }
        </ProductsContext.Provider>
    );
}