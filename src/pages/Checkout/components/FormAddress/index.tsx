import { ContainerForm, InputContainer } from './styles';
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
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="text" 
                        placeholder='CEP' />
                </InputContainer>
                <InputContainer>
                    <input type="text" placeholder='Rua' />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="number" 
                        placeholder='Número' />
                    <input type="text" placeholder='Complemento' />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="text" 
                        placeholder='Bairro' />
                    <input 
                        style={{ maxWidth: "min(276px, 100%)" }} 
                        type="text" 
                        placeholder='Cidade' />
                    <input 
                        style={{ maxWidth: "min(60px, 100%)" }} 
                        type="text" 
                        placeholder='UF' />
                </InputContainer>
            </form>
        </ContainerForm>
    );
}