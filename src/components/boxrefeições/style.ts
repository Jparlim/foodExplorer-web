import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: -130px;

    > h1 {
        color: var(--Light-Light-300, #E1E1E6);

        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 23px;
        margin-left: 80px;
    }

    > div {
        display: flex;

        justify-content: center;

        width: 1122px;
        height: 529px;

        gap: 27px;
    }
`

