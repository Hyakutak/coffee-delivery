import { PaymentContainer, PaymentMethod } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { useContext } from 'react';
import { ProductsContext } from '../../../../contexts/CartContext';

export function PaymentMethods() {
    const { handleClickModifiedFormPayment, formPayment } = useContext(ProductsContext);

    const credit = 'Cartão de Crédito';
    const debit = 'Cartão de Débito';
    const money = 'Dinheiro';

    const isCredit = formPayment === credit;
    const isDebit = formPayment === debit;
    const isMoney = formPayment === money;

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
                <PaymentMethod disabled={isCredit} onClick={() => handleClickModifiedFormPayment('Cartão de Crédito')}>
                    <CreditCard size={16} />
                    Cartão de crédito
                </PaymentMethod>
                <PaymentMethod disabled={isDebit} onClick={() => handleClickModifiedFormPayment('Cartão de Débito')}>
                    <Bank size={16} />
                    <p>Cartão de débito</p>
                </PaymentMethod>
                <PaymentMethod disabled={isMoney} onClick={() => handleClickModifiedFormPayment('Dinheiro')}>
                    <Money size={16} />
                    <p>Dinheiro</p>
                </PaymentMethod>
            </section>
        </PaymentContainer>
    );
}