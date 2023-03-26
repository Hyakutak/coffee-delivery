import styled from "styled-components";

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
    span {
        color: ${(props) => props.theme['base-title']};
        line-height: 1.3125rem;
        width: 1.25rem;
        text-align: center;
    }
`;