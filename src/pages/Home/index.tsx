import { useState, useEffect } from "react";
import { Banner } from "./components/Banner";
import { Card } from './components/card';
import { IProduct } from '../../interfaces/IProduct';
import { GridProducts } from './style';


export function Home() {
    const [listProducts, setListProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('./products.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setListProducts(res.data))
    }, []);

    const listProduct = listProducts.map((product) => {
        return <Card name={product.name} image={product.image} price={product.price} description={product.description} type={product.type} />
    })

    return (
        <main>
            <Banner />
            <article>
                <GridProducts>
                    { listProduct }
                </GridProducts>
            </article>
        </main>
    );
}