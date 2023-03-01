import { ContainerBanner, ContainerBannerTexts, ContainerBannerHeading, ContainerBannerList } from "./styles";
import BannerBackground from "../../assets/banner.svg";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export function Banner() {
    return (
        <ContainerBanner>
            <ContainerBannerTexts>
                <ContainerBannerHeading>
                    <h2>
                        Encontre o café perfeito para qualquer hora do dia
                    </h2>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </span>
                </ContainerBannerHeading>
                <ContainerBannerList>
                    <ul>
                        <li>
                            <ShoppingCart size={16} className="cart" />
                            Compra simples e segura
                        </li>
                        <li>
                            <Timer size={16} className="timer" />
                            Entrega rápida e rastreada
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Package size={16} className="packge" />
                            Embalagem mantém o café intacto
                        </li>
                        <li>
                            <Coffee size={16} className="coffee" />
                            O café chega fresquinho até você
                        </li>
                    </ul>
                </ContainerBannerList>
            </ContainerBannerTexts>
            <img src={BannerBackground} />
        </ContainerBanner>
    );
}