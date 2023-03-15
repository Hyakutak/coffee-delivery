import { IProduct } from '../../../../interfaces/IProduct';
import { CardProduct, CardProductTypes, CardProductText, CardProductBuy, CardProductBuyActions } from './styles';
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";


export function Card({ name, image, description, price, types }:IProduct) {

    const typesProduct = types.map((type) => {
        return <span>{type}</span>
    });

    const currencyPrice = price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

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
                <p>R$ <span>{currencyPrice}</span></p>
                <CardProductBuyActions>
                    <section>
                        <Minus size={14} />
                        <span>1</span>
                        <Plus size={14} />
                    </section>
                    <aside>
                        <ShoppingCartSimple size={22} weight="fill" />
                    </aside>
                </CardProductBuyActions>
            </CardProductBuy>
        </CardProduct>
    )
}