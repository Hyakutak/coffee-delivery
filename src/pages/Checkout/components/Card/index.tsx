import { CardContent, CardContainer, Actions, ActionRemove, ActionQuantidy } from './styles';
import { Trash, Plus, Minus } from "phosphor-react";
import { NewProductData, ProductsContext } from '../../../../contexts/ProductsContext';
import { useContext } from 'react';

export function Card({id, name, price, image, amount}: NewProductData) {
    const { handleDeletedProductToCart } = useContext(ProductsContext);

    function sendProductToCart() {
		handleDeletedProductToCart(id);
	};
    return (
        <CardContent>
            <CardContainer>
                <header>
                    <img src={ image } />
                    <section>
                        <h2>{ name }</h2>
                        <Actions>
                            <ActionQuantidy>
                                <Minus size={14} />
                                <input value={amount} /*onChange={(event) => setItemAmount(Number(event.target.value))}*/ min="1" name="quantity" type="number" />
                                <Plus size={14} />
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