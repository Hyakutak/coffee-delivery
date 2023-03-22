import { PaymentContainer, PaymentMethod } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';

export function PaymentMethods() {
    return (
        <PaymentContainer>
            <header>
                <CurrencyDollar size={22} />
                <div>
                    <h4>Pagamento</h4>
                    <h5>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h5>
                </div>
            </header>
            <section>
                <PaymentMethod>
                    <CreditCard size={16} />
                    <p>Cartão de crédito</p>
                </PaymentMethod>
                <PaymentMethod>
                    <Bank size={16} />
                    <p>Cartão de débito</p>
                </PaymentMethod>
                <PaymentMethod>
                    <Money size={16} />
                    <p>Dinheiro</p>
                </PaymentMethod>
            </section>
        </PaymentContainer>
    );
}