import { IProductCart } from "./IProductCart";

export interface ICartContextType {
    products: IProductCart[];
    formPayment: string;
    handleAddProductToCart: (product: IProductCart) => void;
    handleDeletedProductToCart: (id: number) => void;
    handleAmountProductToCart: (id: number, amount: number) => void;
    handleFinishOrder: () => void;
    handleClickModifiedFormPayment: (method: string) => void;
}