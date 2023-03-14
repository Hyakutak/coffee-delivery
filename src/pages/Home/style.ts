import styled from "styled-components";

export const ContainerProducts = styled.article`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    gap: 3.375rem;
`;

export const GridProducts = styled.section`
    display: grid;
    grid: '1fr 1fr 1fr 1fr';
    flex-wrap: wrap;
    gap: 2rem;
`;

export const HeaderProducts = styled.header`
    display: flex;
    h3 {
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-weight: 800;
        line-height: 2.625rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`;