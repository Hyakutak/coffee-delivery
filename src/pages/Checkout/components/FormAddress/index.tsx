import { useState, useEffect, ChangeEvent, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { ContainerForm, InputContainer } from './styles';
import { ProductsContext } from '../../../../contexts/CartContext';
import { MapPinLine } from 'phosphor-react';
import Api from '../../../../services/Api';
import { Config } from '../../../../config';
import InputMask from 'react-input-mask';

export function FormAddress() {
    
    const { 
        handleAddAddressUser, 
        userInfo, 
        handleChangeNumberAddress,
        handleChangeComplementAddress } = useContext(ProductsContext);
    const { register, watch } = useFormContext();

    const cep = watch('CEP');
    const isCepValid = /^[0-9]{5}-[0-9]{3}$/.test(cep);

    const logradouroUser = userInfo.logradouro ? userInfo.logradouro : '';
    const bairroUser = userInfo.bairro ? userInfo.bairro : '';
    const localidadeUser = userInfo.localidade ? userInfo.localidade : '';
    const ufUser = userInfo.uf ? userInfo.uf : '';

    useEffect(() => {
        if(isCepValid) {
            Api
             .get(`${Config.dbUrl}/${cep}/json`)
             .then((response) => {
                handleAddAddressUser(response.data);
             })
             .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
             });
        }
    }, [watch('CEP')]);


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
                        {...register('CEP')} />
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
                        onChange={changeInputNumber} />
                    <input 
                        type="text" 
                        placeholder='Complemento' 
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