import { HeaderContainer, 
         HeaderContainerActions, 
         HeaderContainerAction } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </NavLink>
            <HeaderContainerActions>
                <HeaderContainerAction backgroundVariant={'purple-light'} variantIcon={'purple'} variantText={'purple-dark'}>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </HeaderContainerAction>
                <HeaderContainerAction backgroundVariant={'yellow-light'} variantIcon={'yellow'} variantText={'yellow-dark'}>
                    <NavLink to="/checkout" title="Checkout">
                        <ShoppingCart size={22} weight="fill" />
                    </NavLink>
                </HeaderContainerAction>
            </HeaderContainerActions>
        </HeaderContainer>
    );
}