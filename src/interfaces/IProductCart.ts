import { IProduct } from './IProduct';

export interface IProductCart extends Pick<IProduct, "id" | "image" | "name" | "price"> {
    amount: number
}