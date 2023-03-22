import { CardContainer, Actions, ActionQuantidy, ActionRemove } from './styles';
import { Plus, Minus, Trash } from "phosphor-react";

export function Card() {
    return (
        <CardContainer>
            <header>
                <img src="/assets/image/products/expresso.svg" />
                <section>
                    <h2>Expresso Tradicional</h2>
                    <Actions>
                        <ActionQuantidy>
                            <Minus size={14} />
                            <span>1</span>
                            <Plus size={14} />
                        </ActionQuantidy>
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