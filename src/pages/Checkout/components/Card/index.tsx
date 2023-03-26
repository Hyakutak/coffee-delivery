import { CardContainer, Actions, ActionRemove } from './styles';
import { Trash } from "phosphor-react";
import { ActionsQuantity } from '../../../../components/ActionsQuantity';

export function Card() {
    return (
        <CardContainer>
            <header>
                <img src="/assets/image/products/expresso.svg" />
                <section>
                    <h2>Expresso Tradicional</h2>
                    <Actions>
                        <ActionsQuantity />
                        <ActionRemove>
                            <Trash size={16} />
                            <span>Remover</span>
                        </ActionRemove>
                    </Actions>
                </section>
            </header>
            <span>R$ 9,90</span>
        </CardContainer>
    );
}