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
        flex-grow: 1;
    }
`;