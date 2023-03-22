import { ContainerBanner, ContainerBannerTexts, ContainerBannerHeading, ContainerBannerList, ContainerBannerListItem} from "./styles";
import BannerBackground from "../../../../assets/banner.svg";
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
                        <ContainerBannerListItem color={'yellow-dark'}>
                            <ShoppingCart size={16} weight="fill" />
                            Compra simples e segura
                        </ContainerBannerListItem>
                        <ContainerBannerListItem color={'base-text'}>
                            <Package size={16} weight="fill" />
                            Embalagem mantém o café intacto
                        </ContainerBannerListItem>
                        <ContainerBannerListItem color={'yellow'}>
                            <Timer size={16} weight="fill" />
                            Entrega rápida e rastreada
                        </ContainerBannerListItem>
                        <ContainerBannerListItem color={'purple'}>
                            <Coffee size={16} weight="fill" />
                            O café chega fresquinho até você
                        </ContainerBannerListItem>
                    </ul>
                </ContainerBannerList>
            </ContainerBannerTexts>
            <img src={BannerBackground} />
        </ContainerBanner>
    );
}