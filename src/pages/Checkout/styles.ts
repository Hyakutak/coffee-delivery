import styled from "styled-components";

export const ContainerCheckout = styled.main`
    display: flex;
    gap: 2rem;
    padding-top: 2.5rem;

    h3 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.4375rem;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.1875rem;
    }

    article {
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 0.75rem;
    }

    aside {
        max-width: 28rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 0.75rem;
    }
`;

export const ContentAside = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    border-radius: 6px 44px;
    gap: 1.5rem;
    background: ${(props) => props.theme['base-card']};
    hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme['base-button']};
    }
    form {
        width: 100%;
    }
`;

export const ButtonBuy = styled.button`
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    border-radius: 6px;
    border: 0;
    padding: 0.75rem 0.5rem;
    width: 100%;
    text-transform: uppercase;
    font-stretch: 100;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.375rem;
    cursor: pointer;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;
    width: 100%;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 0.5rem;
        width: 100%;
        span {
            color: ${(props) => props.theme['base-text']};
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.125rem;
        }
    }
`;

export const TotalPrice = styled.div`
    h5 {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.625rem;
    }
`;
