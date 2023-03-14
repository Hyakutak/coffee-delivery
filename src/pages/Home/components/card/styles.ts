import styled from 'styled-components';

export const CardProduct = styled.div`
    max-width: 16rem;
    max-height: 19.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px 36px;
    background: ${(props) => props.theme['base-card']};
    padding: 1.25rem 1.5rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const CardProductTypes = styled.section`
    display: flex;
    gap: 0.25rem;
    margin-top: 1rem;

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