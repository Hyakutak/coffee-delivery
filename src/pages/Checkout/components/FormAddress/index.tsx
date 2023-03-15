import { ContainerForm } from './styles';
import { MapPinLine } from 'phosphor-react';

export function FormAddress() {
    return (
        <ContainerForm>
            <header>
                <MapPinLine size={22} />
                <div>
                    <h4>Endereço de Entrega</h4>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </header>
            <form>
                <input type="text" placeholder='CEP' />
                <input type="text" placeholder='Rua' />
                <input type="number" placeholder='Número' />
                <input type="text" placeholder='Complemento' />
                <input type="text" placeholder='Bairro' />
                <input type="text" placeholder='Cidade' />
                <input type="text" placeholder='UF' />
            </form>
        </ContainerForm>
    );
}