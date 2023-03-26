import { Plus, Minus } from "phosphor-react";
import { ActionQuantidy } from './styles';

export function ActionsQuantity() {
    return(
        <ActionQuantidy>
            <Minus size={14} />
            <span>1</span>
            <Plus size={14} />
        </ActionQuantidy>
    );
}