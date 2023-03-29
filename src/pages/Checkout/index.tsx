import { FormProvider, useForm } from 'react-hook-form';
import { FormEvent, useContext } from 'react';
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductsContext } from '../../contexts/CartContext';
import { FormAddress } from './components/FormAddress';
import { PaymentMethods } from './components/PaymentMethods';
import { convertNumerToPrice } from '../../utils/formatPriceMoney';
import { ContainerCheckout, ContentAside, ButtonBuy, PriceContainer, TotalPrice } from './styles';
import { Card } from './components/Card';

const newCompleteOrderFormSchema = zod.object({
    CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
});

export type NewCompleteOrderData = zod.infer<typeof newCompleteOrderFormSchema>;

export function Checkout() {
    const { products, handleFinishOrder } = useContext(ProductsContext);
    const navigate = useNavigate();

    const totalProducts = products.reduce((value, product) => value + (product.price * product.amount), 0);
    const formattedTotalProductsMoney = convertNumerToPrice(totalProducts);

    const deliveryPrice = 3.30;
    const formattedDeliveryPriceMoney = convertNumerToPrice(deliveryPrice);

    const totalPriceProducts = products.reduce((value, product) => value + (product.price * product.amount) + deliveryPrice, 0);
    const formattedTotalPriceProducts = convertNumerToPrice(totalPriceProducts);

    const ProductsToCart = products ? products.map((product) => 
        (<Card key={product.id} {...product} />)) 
        : <></>

    const newOrderForm = useForm<NewCompleteOrderData>({
        resolver: zodResolver(newCompleteOrderFormSchema),
        defaultValues: {
            CEP: '',
        },
    });

    function handleFinishOrderAction(event: FormEvent) {
        event.preventDefault();
        handleFinishOrder();
        navigate('/checkout/success');
    }
    
    return (
        <ContainerCheckout>
            <article>
                <h3>Complete seu pedido</h3>
                <FormProvider {...newOrderForm}>
                    <FormAddress />
                    <PaymentMethods />
                </FormProvider>
            </article>
            <aside>
                <h3>Cafés selecionados</h3>
                <ContentAside>
                    { ProductsToCart }
                    <PriceContainer>
                        <div>
                            <span>Total de itens</span>
                            <span>R$ {formattedTotalProductsMoney}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ {formattedDeliveryPriceMoney}</span>
                        </div>
                        <TotalPrice>
                            <h5>Total</h5>
                            <h5>R$ {formattedTotalPriceProducts}</h5>
                        </TotalPrice>
                    </PriceContainer>
                    <form onSubmit={handleFinishOrderAction}>
                        <ButtonBuy type="submit">
                            confirmar pedido
                        </ButtonBuy>
                    </form>
                </ContentAside>
            </aside>
        </ContainerCheckout>
    );
}