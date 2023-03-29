import { useContext } from 'react';
import { ProductsContext } from '../../contexts/CartContext';
import { SuccessContainer, SuccessContent, SuccessInfo, SuccessInfoDelivy } from './styles';
import Delivery from '../../assets/Illustration.svg';
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

export function CheckoutSuccess() {
    const {  userInfo, paymentMethod } = useContext(ProductsContext);

    

    return (
        <SuccessContainer>
            <header>
                <h2>Uhu! Pedido confirmado</h2>
                <h6>Agora é só aguardar que logo o café chegará até você</h6>
            </header>
            <section>
                <SuccessContent>
                    <SuccessInfo color='purple'>
                        <MapPin size={32} weight="fill" />
                        <div>
                            <span>Entrega em <SuccessInfoDelivy>{userInfo.logradouro}, 27</SuccessInfoDelivy></span>
                            <span>{userInfo.bairro} - {userInfo.localidade}, {userInfo.uf}</span>
                        </div>
                    </SuccessInfo>
                    <SuccessInfo color='yellow'>
                        <Timer size={32} weight="fill" />
                        <div>
                            <span>Previsão de entrega</span>
                            <SuccessInfoDelivy>20 min - 30 min</SuccessInfoDelivy>
                        </div>
                    </SuccessInfo>
                    <SuccessInfo color='yellow-dark'>
                        <CurrencyDollar size={32} />
                        <div>
                            <span>Pagamento na entrega</span>
                            <SuccessInfoDelivy>
                                { paymentMethod.isCredit && 'Cartão de Crédito' }
                                { paymentMethod.isDebit && 'Cartão de Débito' }
                                { paymentMethod.isMoney && 'Dinheiro' }
                            </SuccessInfoDelivy>
                        </div>
                    </SuccessInfo>
                </SuccessContent>
                <img src={Delivery} />
            </section>
        </SuccessContainer>
    );
}