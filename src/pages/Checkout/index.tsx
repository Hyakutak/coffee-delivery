import { FormProvider, useForm } from 'react-hook-form';
import { FormEvent, useContext } from 'react';
import * as zod from 'zod';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductsContext } from '../../contexts/ProductsContext';
import { FormAddress } from './components/FormAddress';
import { PaymentMethods } from './components/PaymentMethods';
import { ContainerCheckout, ContentAside, ButtonBuy, PriceContainer, TotalPrice } from './styles';
import { Card } from './components/Card';

const newCompleteOrderFormSchema = zod.object({
    CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
    road: zod.string().min(10),
    number: zod.string().min(1).max(3),
    complement: zod.string().min(20),
    district: zod.string().min(10),
    city: zod.string(),
    estate: zod.string(),
});

export type NewCompleteOrderData = zod.infer<typeof newCompleteOrderFormSchema>;

export function Checkout() {
    const { products, handleFinishOrder } = useContext(ProductsContext);
    const navigate = useNavigate();

    const totalProducts = products.reduce((value, product) => value + (product.price * product.amount), 0);

    const freight = 3.30;

    const totalPriceProducts = products.reduce((value, product) => value + (product.price * product.amount) + freight, 0);

    const ProductsToCart = products ? products.map((product) => 
        (<Card key={product.id} {...product} />)) 
        : <></>

    const newOrderForm = useForm<NewCompleteOrderData>({
        resolver: zodResolver(newCompleteOrderFormSchema),
        defaultValues: {
            CEP: '',
            road: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            estate: '',
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