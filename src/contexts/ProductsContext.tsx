import { createContext } from "react";

interface Product {
    name: string,
    description: string,
    price: number,
    tags: {
        tag1: string,
        tag2: string,
        tag3: string
    }
}

interface ProductsContextType {
    products: Product
}

export const ProductsContext = createContext({} as ProductsContextType);