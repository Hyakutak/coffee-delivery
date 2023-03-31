import { useState, useEffect } from "react";
import Api from '../../services/Api';
import { urlsApis } from "../../utils/urlsApi";
import { Banner } from "./components/Banner";
import { Card } from './components/card';
import { GridProducts, HeaderProducts, ContainerProducts } from './style';
import { IProduct } from '../../interfaces/IProduct';

export function Home() {
    const [listProducts, setListProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        Api
         .get(urlsApis.productsUrl)
         .then((response) => setListProducts(response.data.data))
         .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);
    
    const productsCards = listProducts ? listProducts.map((product: IProduct) => (<Card key={product.id} {...product}/>)) : <></>

    return (
        <main>
            <Banner />
            <ContainerProducts>
                <HeaderProducts>
                    <h3>Nossos cafés</h3>
                </HeaderProducts>
                <GridProducts>
                    {productsCards}
                </GridProducts>
            </ContainerProducts>
        </main>
    );
}