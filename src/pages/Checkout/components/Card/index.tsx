import { CardContent, CardContainer, Actions, ActionRemove, ActionQuantidy } from './styles';
import { Trash, Plus, Minus } from "phosphor-react";
import { ProductsContext } from '../../../../contexts/CartContext';
import { useContext, useState } from 'react';
import { IProductCart } from '../../../../interfaces/IProductCart';

export function Card({id, name, price, image, amount}: IProductCart) {
    const { handleDeletedProductToCart, handleAmountProductToCart } = useContext(ProductsContext);
    const [itemAmount, setItemAmount] = useState<number>(1);

    function sendProductToCart() {
		handleDeletedProductToCart(id);
	}

    function incrementProductToCart() {
        handleAmountProductToCart(id, amount + 1)
    }

    function decrementProductToCart() {
        handleAmountProductToCart(id, amount - 1)
    }

    return (
        <CardContent>
            <CardContainer>
                <header>
                    <img src={ image } alt={name} />
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
                <span>R$ { price.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</span>
            </CardContainer>
            <hr />
        </CardContent>
    );
}