import { PaymentContainer, PaymentMethod } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { FormEvent, useContext } from 'react';
import { ProductsContext } from '../../../../contexts/CartContext';

export function PaymentMethods() {
    const { handleClickModifiedPaymentMethod, paymentMethod } = useContext(ProductsContext)

    function modifiedPaymentMethod(event: FormEvent) {
        const button = event.target as HTMLButtonElement;
        handleClickModifiedPaymentMethod(button);
    }

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
                <PaymentMethod disabled={paymentMethod.isCredit} value="isCredit" onClick={modifiedPaymentMethod}>
                    <CreditCard size={16} />
                    Cartão de crédito
                </PaymentMethod>
                <PaymentMethod disabled={paymentMethod.isDebit} value="isDebit" onClick={modifiedPaymentMethod}>
                    <Bank size={16} />
                    <p>Cartão de débito</p>
                </PaymentMethod>
                <PaymentMethod disabled={paymentMethod.isMoney} value="isMoney" onClick={modifiedPaymentMethod}>
                    <Money size={16} />
                    <p>Dinheiro</p>
                </PaymentMethod>
            </section>
        </PaymentContainer>
    );
}