import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
`;

export const HeaderContainerActions = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    a {
        padding: 0.5rem;
        border-radius: 6px;
        max-height: 2.375rem;
        background: ${(props) => props.theme['yellow-light']};

        svg {
            color: ${(props) => props.theme['yellow-dark']};
        }
    }
`;

export const HeaderContainerActionsLocation = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    max-height: 2.375rem;
    background: ${(props) => props.theme['purple-light']};

    svg {
        color: ${(props) => props.theme['purple']};
    }

    span {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${(props) => props.theme['purple-dark']};
    }
`;
