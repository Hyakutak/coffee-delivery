import styled from 'styled-components';

export const CardProduct = styled.div`
    max-width: 16rem;
    max-height: 19.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px 36px;
    background: ${(props) => props.theme['base-card']};
    padding-top: 7rem;
    position: relative;

    img {
        width: 7.5rem;
        height: 7.5rem;
        position: absolute;
        top: -1.25rem;
    }
`;

export const CardProductTypes = styled.section`
    display: flex;
    gap: 0.25rem;

    span {
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        font-size: 0.625rem;
        font-weight: 700;
        line-height: 0.8125rem;
        text-transform: uppercase;
    }
`;

export const CardProductText = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    margin-top: 1rem;

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.625rem;
    }
    span {
        color: ${(props) => props.theme['base-label']};
        font-size: 0.875rem;
        line-height: 1.125rem;
        padding: 0 1.25rem;
    }
`;

export const CardProductBuy = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem;
    gap: 1.4375rem;
    p {
        line-height: 1.1375rem;
        font-size: 0.875rem;
        span {
            font-weight: 800;
            font-family: 'Baloo 2';
            font-size: 1.5rem;
            line-height: 1.95rem;
        }
    }
`;``

export const CardProductBuyActions = styled.section`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    button {
        background: ${(props) => props.theme['purple-dark']};
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        border-radius: 6px;
        border: 0;
        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme['purple']};
        }
        svg {
            color: ${(props) => props.theme['white']};
        }
    }
`;

export const ActionQuantidy = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    max-height: 2.375rem;
    max-width: 4.5rem;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    svg {
        background: transparent;
        color: ${(props) => props.theme['purple']};
        padding: 0;
        cursor: pointer;
        &:hover {
            color: ${(props) => props.theme['purple-dark']};
        }
    }
    input {
        color: ${(props) => props.theme['base-title']};
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        -moz-appearance: textfield; /* Firefox */
        appearance: textfield; /* outros navegadores */
        max-width: 1.5rem;
        justify-content: center;
        text-align: center;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`;