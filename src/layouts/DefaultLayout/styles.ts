import styled from "styled-components";
import { css } from "styled-components";
import { mobile } from "../../styles/responsive";

export const Layoutocntainer = styled.div`
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${mobile(css`
        padding: 0 1rem;
    `)};
`;