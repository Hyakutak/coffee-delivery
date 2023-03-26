import { useState, useContext } from 'react';
import { IProduct } from '../../../../interfaces/IProduct';
import { CardProduct, CardProductTypes, CardProductText, CardProductBuy, CardProductBuyActions } from './styles';
import { ShoppingCartSimple } from "phosphor-react";
import { ActionsQuantity } from '../../../../components/ActionsQuantity';
import { ProductsContext } from '../../../../contexts/ProductsContext';

interface IProductCard {
    product: IProduct;
}

export function Card({product} :IProductCard) {
    const [itemAmount, setItemAmount] = useState(1);
    const { handleAddProductToCart } = useContext(ProductsContext);

    const typesProduct = product.types.map((type) => {
        return <span>{type}</span>
    });

    const currencyPrice = product.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const sendProductToCart = () => {
		const payload = {
			...product
		};

		handleAddProductToCart(payload);
	};

    return (
        <CardProduct>
            <img src={product.image} />
            <CardProductTypes>
                {typesProduct}
            </CardProductTypes>
            <CardProductText>
                <h2>{ product.name }</h2>
                <span>{ product.description }</span>
            </CardProductText>
            <CardProductBuy>
                <p>R$ <span>{currencyPrice}</span></p>
                <CardProductBuyActions>
                    <ActionsQuantity />
                    <button onClick={()=> {sendProductToCart}}>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </button>
                </CardProductBuyActions>
            </CardProductBuy>
        </CardProduct>
    )
}