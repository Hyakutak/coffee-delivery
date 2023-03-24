import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Banner } from "./components/Banner";
import { Card } from './components/card';
import { GridProducts, HeaderProducts, ContainerProducts } from './style';
import { IProduct } from '../../interfaces/IProduct';

export function Home() {
    const { listProducts } = useContext(ProductsContext);
    
    const productsCards = listProducts ? listProducts.map((product: IProduct) => (<Card {...product}/>)) : <></>

    return (
        <main>
            <Banner />
            <ContainerProducts>
                <HeaderProducts>
                    <h3>Nossos cafés</h3>
                </HeaderProducts>
                <GridProducts>
                    { productsCards }
                </GridProducts>
            </ContainerProducts>
        </main>
    );
}