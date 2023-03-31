import { css } from 'styled-components';

const size = {
    mobile: "768px"
}

export const mobile = (inner: any) => css`
    @media (max-width: ${size.mobile}) {
        ${inner};
    }
`;