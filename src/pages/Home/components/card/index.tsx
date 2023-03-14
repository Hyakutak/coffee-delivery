import { IProduct } from '../../../../interfaces/IProduct';
import { CardProduct, CardProductTypes } from './styles';

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
        </CardProduct>
    )
}