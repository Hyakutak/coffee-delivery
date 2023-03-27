import { useContext } from 'react';
import { FormAddress } from './components/FormAddress';
import { PaymentMethods } from './components/PaymentMethods';
import { ContainerCheckout, ContentAside, ButtonBuy, PriceContainer, TotalPrice } from './styles';
import { Card } from './components/Card';
import { NewProductData, ProductsContext } from '../../contexts/ProductsContext';

export function Checkout() {
    const { products } = useContext(ProductsContext);

    const totalProducts = products.reduce((value, product) => value + (product.price * product.amount), 0);

    const freight = 3.30;

    const totalPriceProducts = products.reduce((value, product) => value + (product.price * product.amount) + freight, 0);

    const ProductsToCart = products ? products.map((product) => 
        (<Card key={product.id} {...product} />)) 
        : <></>
    
    return (
        <ContainerCheckout>
            <article>
                <h3>Complete seu pedido</h3>
                <FormAddress />
                <PaymentMethods />
            </article>
            <aside>
                <h3>Cafés selecionados</h3>
                <ContentAside>
                    { ProductsToCart }
                    <PriceContainer>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ {totalProducts.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ {freight.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</span>
                        </div>
                        <TotalPrice>
                            <h5>Total</h5>
                            <h5>R$ {totalPriceProducts.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</h5>
                        </TotalPrice>
                    </PriceContainer>
                    <form action="/checkout/success">
                        <ButtonBuy type="submit">
                            confirmar pedido
                        </ButtonBuy>
                    </form>
                </ContentAside>
            </aside>
        </ContainerCheckout>
    );
}