import { CardContent, CardContainer, Actions, ActionRemove, ActionQuantidy } from './styles';
import { Trash, Plus, Minus } from "phosphor-react";
import { useState } from 'react';
import { IProductCart } from '../../../../interfaces/IProductCart';
import { convertNumerToPrice } from '../../../../utils/formatPriceMoney';

interface ProductItemProps {
    productCart: IProductCart,
    changeAmountCartItem: (id: number, amount: number) => void, 
    deletedCartItem: (id: number) => void, 
}

export function Card({productCart, changeAmountCartItem, deletedCartItem}: ProductItemProps) {
    const {id, name, image, price, amount} = productCart;
    const [itemAmount, setItemAmount] = useState<number>(1);

    function sendProductToCart() {
		deletedCartItem(id);
	}

    function incrementProductToCart() {
        changeAmountCartItem(id, amount + 1)
    }

    function decrementProductToCart() {
        changeAmountCartItem(id, amount - 1)
    }

    return (
        <CardContent>
            <CardContainer>
                <header>
                    <img src={ image } alt={`Foto do produto - Café ${name}`} />
                    <section>
                        <h2>{ name }</h2>
                        <Actions>
                            <ActionQuantidy>
                                <Minus size={14} onClick={decrementProductToCart} />
                                <input value={amount} onChange={(event) => setItemAmount(Number(event.target.value))} min="1" name="quantity" type="number" />
                                <Plus size={14} onClick={incrementProductToCart} />
                            </ActionQuantidy>
                            <ActionRemove onClick={sendProductToCart}>
                                <Trash size={16} />
                                <span>Remover</span>
                            </ActionRemove>
                        </Actions>
                    </section>
                </header>
                <span>R$ { convertNumerToPrice(price)}</span>
            </CardContainer>
            <hr />
        </CardContent>
    );
}