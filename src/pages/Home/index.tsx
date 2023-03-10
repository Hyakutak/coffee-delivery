import { useState, useEffect } from "react";
import { Banner } from "./components/Banner";
import { Card } from './components/card';

interface Product {
    name: string,
    description: string,
    imame: string,
    price: number,
    tags?: {
        tag1: string,
        tag2: string,
        tag3: string
    }
}

export function Home() {
    const [listProducts, setListProducts] = useState<Product>();

    useEffect(() => {
        fetch('./products.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setListProducts(res.data))
    }, []);

    return (
        <main>
            <Banner />
            <article>
                
            </article>
        </main>
    );
}