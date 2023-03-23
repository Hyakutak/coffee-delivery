import { SuccessContainer, SuccessContent, SuccessInfo, SuccessInfoDelivy } from './styles';
import Delivery from '../../assets/Illustration.svg';
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";

export function CheckoutSuccess() {
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
                            <span>Entrega em <SuccessInfoDelivy> Rua João Daniel Martinelli, 102</SuccessInfoDelivy></span>
                            <span>Farrapos - Porto Alegre, RS</span>
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
                            <SuccessInfoDelivy>Cartão de Crédito</SuccessInfoDelivy>
                        </div>
                    </SuccessInfo>
                </SuccessContent>
                <img src={Delivery} />
            </section>
        </SuccessContainer>
    );
}