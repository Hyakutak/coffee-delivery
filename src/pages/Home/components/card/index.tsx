import { IProduct } from '../../../../interfaces/IProduct';

export function Card({ name, image, description, price, type }:IProduct) {
    return (
        <div>
            <img src={image} />
        </div>
    )
}