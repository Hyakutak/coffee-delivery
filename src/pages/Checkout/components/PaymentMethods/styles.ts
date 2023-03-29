import styled from "styled-components";

export const PaymentContainer = styled.section`
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
            color: ${(props) =>props.theme['purple']};
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.125rem;
            h4 {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.3125rem;
                color: ${(props) => props.theme['base-subtitle']};
            }
            h5 {
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.125rem;
                color: ${(props) => props.theme['base-text']};
            }
        }
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        button[disabled] {
            background: ${(props) => props.theme['purple-light']};
            border: 1px solid ${(props) => props.theme['purple-dark']};
        }
    }
`;

export const PaymentMethod = styled.button`
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    width: 33%;
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme['base-hover']};
        color: ${(props) => props.theme['base-subtitle']};    
    }

    svg {
        color: ${(props) =>props.theme['purple']};
    }
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.1875rem;
`;