import styled from "styled-components";

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme['base-button']};
    }
`;

export const CardContainer = styled.div`
    background: ${(props) => props.theme['base-card']};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;
    gap: 3.6875rem;

    header {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
        }
        section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 0.5rem;
            h2 {
                color: ${(props) => props.theme['base-subtitle']};
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.3125rem;
            }
        }
    }
    span {
        color: ${(props) => props.theme['base-text']};
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3125rem;
        width: 3.4375rem;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        gap: 0.25rem;
        svg {
            color: ${(props) => props.theme['purple']};
            cursor: pointer;
            &:hover {
                color: ${(props) => props.theme['purple-dark']};
            }
        }
        span {
            width: fit-content;
        }
    }
`;

export const ActionRemove = styled.div`
    width: 5.6875rem;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.theme['base-hover']};
    }
    span {
        font-weight: 400;
        font-size: 0.75rem;
        text-transform: uppercase;
        line-height: 1.1875rem;
        color: ${(props) => props.theme['base-text']};
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