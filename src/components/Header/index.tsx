import { HeaderContainer, 
         HeaderContainerActions, 
         HeaderContainerActionsLocation, 
         HeaderContainerActionsCart } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import LogoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
            <HeaderContainerActions>
                <HeaderContainerActionsLocation>
                    <MapPin size={22} weight="fill" />
                    <span>Porto Alegre, RS</span>
                </HeaderContainerActionsLocation>
                <HeaderContainerActionsCart>
                    <ShoppingCart size={22} weight="fill" />
                </HeaderContainerActionsCart>
            </HeaderContainerActions>
        </HeaderContainer>
    );
}