import { createContext, ReactNode, useState, useEffect, useReducer } from "react";
import { IProduct } from '../interfaces/IProduct';
import Api from '../services/Api';
import { CartReducer, IProductsInCart } from "../reducers/reducer";
import { addNewProductToCart } from "../reducers/actions";

interface ProductsContextType {
    products: IProduct[];
        listProducts?: IProduct[];
        handleAddProductToCart: (product: IProduct) => void;
}

interface ProductsContextProviderProps {
    children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextType);

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [cartState, dispatch] = useReducer(
		CartReducer,
    { products: [] } as IProductsInCart,);
    const [listProducts, setListProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        Api
         .get("products.json")
         .then((response) => setListProducts(response.data.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    function handleAddProductToCart(product: IProduct) {
        dispatch(addNewProductToCart(product));
    }

    return (
        <ProductsContext.Provider value={{ listProducts, handleAddProductToCart }}>
            { children }
        </ProductsContext.Provider>
    );
}