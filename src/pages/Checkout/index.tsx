import { FormAddress } from './components/FormAddress';
import { PaymentMethods } from './components/PaymentMethods';
import { ContainerCheckout } from './styles';

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
            </aside>
        </ContainerCheckout>
    );
}