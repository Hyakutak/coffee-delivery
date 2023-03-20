import styled from "styled-components";

interface ColorsActions {
    backgroundVariant: 'purple-light' | 'yellow-light';
    variantText: 'yellow-dark' | 'purple-dark';
    variantIcon: 'purple' | 'yellow';
}

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
`;

export const HeaderContainerAction = styled.section<ColorsActions>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    max-height: 2.375rem;
    background: ${(props) => props.theme[props.backgroundVariant]};

    svg {
        color: ${(props) => props.theme[props.variantIcon]};
    }

    span {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: ${(props) => props.theme[props.variantText]};
    }
    
    a {
        display: flex;
        align-items: center;
    }
`;
