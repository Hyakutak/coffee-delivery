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
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

`;

export const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
    input {
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;
        height: 2.625rem;
        width: 100%;
        padding: 0.75rem;
        ::placeholder {
            color: ${(props) => props.theme['base-label']};
            line-height: 1.125rem;
        }
    }
`;