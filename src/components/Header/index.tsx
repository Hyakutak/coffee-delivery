import { HeaderContainer, 
         HeaderContainerActions, 
         HeaderContainerActionsLocation } from "./styles";
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
                <HeaderContainerActionsLocation>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </HeaderContainerActionsLocation>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={22} weight="fill" />
                </NavLink>
            </HeaderContainerActions>
        </HeaderContainer>
    );
}