import { IProduct } from '../../../../interfaces/IProduct';
import { CardProduct, CardProductTypes, CardProductText } from './styles';

export function Card({ name, image, description, price, types }:IProduct) {

    const typesProduct = types.map((type) => {
        return <span>{type}</span>
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
        </CardProduct>
    )
}