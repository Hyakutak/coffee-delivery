import { useEffect, ChangeEvent, useContext, useState } from 'react';
import { ContainerForm, InputContainer } from './styles';
import { urlsApis } from '../../../../utils/urlsApi';
import { UserContext } from '../../../../contexts/UserContext';
import { MapPinLine } from 'phosphor-react';
import Api from '../../../../services/Api';
import InputMask from 'react-input-mask';
import { IUserInfo } from '../../../../interfaces/IUser';

export function FormAddress() {
    
    const { userAddress, handleAddAddressUser, handleChangeNumberAddress, handleChangeComplementAddress } = useContext(UserContext)
    const [cepUser, setCepUser] = useState(userAddress?.cep || '');

    const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cepUser);

    const logradouroUser = userAddress.logradouro && userAddress.logradouro;
    const bairroUser = userAddress.bairro && userAddress.bairro;
    const localidadeUser = userAddress.localidade && userAddress.localidade;
    const ufUser = userAddress.uf && userAddress.uf;

    useEffect(() => {
        if(isCepValid) {
            fetchAddressForUser();
        }
    }, [cepUser]);

    async function fetchAddressForUser() {
        try {
            const response = await Api.get(`${urlsApis.viaCepUrl}/${cepUser}/json`);
            const dataUser: IUserInfo = {
                cep: response.data.cep,
                logradouro: response.data.logradouro,
                bairro: response.data.bairro,
                localidade: response.data.localidade,
                uf: response.data.uf,
            }
            handleAddAddressUser(dataUser);
        } catch (err) {
            console.error("ops! ocorreu um erro não foi possivel buscar o cep!" + err);
        }
    }


    function changeInputNumber(event: ChangeEvent<HTMLInputElement>) {
        handleChangeNumberAddress(Number(event.target.value));
    }

    function changeInputComplement(event: ChangeEvent<HTMLInputElement>) {
        handleChangeComplementAddress(event.target.value);
    }
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
                    <InputMask 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="text" 
                        placeholder='CEP'
                        mask="99999-999"
                        value={cepUser}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setCepUser(event.target.value)}
                        onBlur={fetchAddressForUser} />
                </InputContainer>
                <InputContainer>
                    <input 
                        type="text" 
                        placeholder='Rua' 
                        value={logradouroUser} 
                        disabled />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="number" 
                        placeholder='Número' 
                        value={userAddress.numero}
                        onChange={changeInputNumber} />
                    <input 
                        type="text" 
                        placeholder='Complemento' 
                        value={userAddress.complemento}
                        onChange={changeInputComplement} />
                </InputContainer>
                <InputContainer>
                    <input 
                        style={{ maxWidth: "min(200px, 100%)" }} 
                        type="text" 
                        placeholder='Bairro'
                        value={bairroUser} 
                        disabled />
                    <input 
                        style={{ maxWidth: "min(276px, 100%)" }} 
                        type="text" 
                        placeholder='Cidade'
                        value={localidadeUser} 
                        disabled />
                    <input 
                        style={{ maxWidth: "min(60px, 100%)" }} 
                        type="text" 
                        placeholder='UF'
                        value={ufUser}
                        disabled  />
                </InputContainer>
            </form>
        </ContainerForm>
    );
}