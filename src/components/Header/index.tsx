import { HeaderContainer, 
         HeaderContainerActions, 
         HeaderContainerAction,
         Counter } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import { IProductCart } from "../../interfaces/IProductCart";

export function Header() {
    const { userAddress } = useContext(UserContext);
    const { products } = useContext(ProductsContext);

    const totalProductsInCart = products.reduce<number>(
        (value: number, currentProduct: IProductCart) => currentProduct.amount ? ++value : value, 0
    );

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </NavLink>
            <HeaderContainerActions>
                <HeaderContainerAction backgroundVariant={'purple-light'} variantIcon={'purple'} variantText={'purple-dark'}>
                    <MapPin size={22} weight="fill" />
                    <span>{userAddress.localidade != undefined ? `${userAddress.localidade}, ${userAddress.uf}` : 'São Paulo, SP'}</span>
                </HeaderContainerAction>
                <HeaderContainerAction backgroundVariant={'yellow-light'} variantIcon={'yellow'} variantText={'yellow-dark'}>
                    <NavLink to="/checkout" title="Checkout">
                        <ShoppingCart size={22} weight="fill" />
                    </NavLink>
                    { totalProductsInCart > 0 && <Counter>{ totalProductsInCart }</Counter> }
                </HeaderContainerAction>
            </HeaderContainerActions>
        </HeaderContainer>
    );
}