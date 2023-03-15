import { FormAddress } from './components/FormAddress';
import { ContainerCheckout } from './styles';

export function Checkout() {
    return (
        <ContainerCheckout>
            <article>
                <h3>Complete seu pedido</h3>
                <FormAddress />
            </article>
            <aside>
                <h3>Cafés selecionados</h3>
            </aside>
        </ContainerCheckout>
    );
}