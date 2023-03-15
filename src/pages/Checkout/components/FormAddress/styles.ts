import styled from "styled-components";

export const ContainerForm = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    border-radius: 6px;
    gap: 2rem;
    background: ${(props) => props.theme['base-card']};

    header {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        svg {
            color: ${(props) => props.theme['yellow-dark']};
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.125rem;
            h4 {
                font-weight: 400;
                line-height: 1.3125rem;
                color: ${(props) => props.theme['base-subtitle']};
            }
            p {
                font-size: 0.875rem;
                line-height: 1.125rem;
            }
        }
    }

    form {
        width: 100%;
        display: grid;
        grid-template-areas: 'cep cep cep cep cep cep cep' 
            'rua rua rua rua rua rua rua' 
            'numero numero complemento complemento complemento complemento complemento' 
            'bairro bairro cidade cidade cidade cidade uf';
        row-gap: 1rem;
        column-gap: 0.75rem;

        input:nth-child(1) {
            grid-area: cep;
            max-width: 12.5rem;
        }
        input:nth-child(2) {
            grid-area: rua;
            max-width: 100%;
        }
        input:nth-child(3) {
            grid-area: numero;
            max-width: 12.5rem;
        }
        input:nth-child(4) {
            grid-area: complemento;
            max-width: 100%;
        }
        input:nth-child(5) {
            grid-area: bairro;
            max-width: 12.5rem;
        }
        input:nth-child(6) {
            grid-area: cidade;
            max-width: 100%;
        }
        input:nth-child(7) {
            grid-area: uf;
            max-width: 3.75rem;
        }
    }

`;