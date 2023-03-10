import styled from 'styled-components';

export type ItemBackground = 'yellow-dark' | 'yellow' | 'base-text' | 'purple';

interface ColorBackground {
    color: ItemBackground;
}

export const ContainerBanner = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 5.75rem 0;
    max-height: 41rem;
`;

export const ContainerBannerTexts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`;

export const ContainerBannerHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        line-height: 3.875rem;
        color: ${(props) => props.theme['base-title']};
    }

    span {
        font-size: 1.25rem;
        line-height: 1.625rem;
        color: ${(props) => props.theme['base-subtitle']};
        font-stretch: 100;
    }
`;

export const ContainerBannerList = styled.div`
    display: flex;
    flex-direction: row;
    ul {
        display: grid;
        grid-template-columns: 14.4375rem 18.375rem;
        row-gap: 1.25rem;
        column-gap: 2.5rem;
        list-style-type: none;
    }
`;

export const ContainerBannerListItem  = styled.li<ColorBackground>`
    line-height: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    svg {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 1000px;
        color: ${(props) => props.theme['white']};
        ${props => {
            return `background-color: ${props.theme[props.color]}`
        }}
    }
`