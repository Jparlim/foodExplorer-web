import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    color: white;

    align-items: center;

    margin: 268px auto;
    width: 1120px;
    height: 260px;
    border-radius: 8px;

    background: linear-gradient(#091E26, #00131C);
    > img {
        width: 632px;
        height: 406px;

        margin-top: -146px;
        margin-left: -60px;
    }

    > div {
        width: 422px;
        height: 80px;

        display: flex;
        flex-direction: column;

        gap: 10px;

        > h1 {
            font-weight: 500;
            font-size: 40px;
            line-height: 56px;

            font-family: Poppins;
        }

        > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;

            font-family: Roboto;
        }
    }
`