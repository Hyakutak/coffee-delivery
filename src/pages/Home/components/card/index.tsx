import { useState, useContext } from 'react';
import { IProduct } from '../../../../interfaces/IProduct';
import { CardProduct, CardProductTypes, CardProductText, CardProductBuy, CardProductBuyActions, ActionQuantidy } from './styles';
import { ShoppingCartSimple,Plus, Minus } from "phosphor-react";
import { ProductsContext } from '../../../../contexts/ProductsContext';

export function Card({ id, types, price, image, name, description } :IProduct) {
    const [itemAmount, setItemAmount] = useState<number>(1);
    const { handleAddProductToCart } = useContext(ProductsContext);

    function inclementAmount() {
        setItemAmount((itemAmount) => ++itemAmount)
    }

    function declementAmount() {
        setItemAmount((itemAmount) => --itemAmount)
    }

    const typesProduct = types.map((type) => {
        return <span>{type}</span>
    });

    function sendProductToCart() {
		const product = {
			id: id,
            name: name,
            image: image,
            price: price,
            amount: itemAmount
		};

		handleAddProductToCart(product);
	};

    return (
        <CardProduct>
            <img src={image} />
            <CardProductTypes>
                {typesProduct}
            </CardProductTypes>
            <CardProductText>
                <h2>{ name }</h2>
                <span>{ description }</span>
            </CardProductText>
            <CardProductBuy>
                <p>R$ <span>{price.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}</span></p>
                <CardProductBuyActions>
                    <ActionQuantidy>
                        <Minus size={14} onClick={declementAmount} />
                        <input value={itemAmount} onChange={(event) => setItemAmount(Number(event.target.value))} min="1" name="quantity" type="number" />
                        <Plus size={14} onClick={inclementAmount} />
                    </ActionQuantidy>
                    <button onClick={sendProductToCart}>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </button>
                </CardProductBuyActions>
            </CardProductBuy>
        </CardProduct>
    )
}