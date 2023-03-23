import { FormAddress } from './components/FormAddress';
import { PaymentMethods } from './components/PaymentMethods';
import { ContainerCheckout, ContentAside, ButtonBuy, PriceContainer, TotalPrice } from './styles';
import { Card } from './components/Card';

export function Checkout() {
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
                    <Card />
                    <hr />
                    <Card />
                    <hr />
                    <PriceContainer>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </div>
                        <TotalPrice>
                            <h5>Total</h5>
                            <h5>R$ 33,20</h5>
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