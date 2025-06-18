import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        width: 330px;
        height: 45px;

        margin-top: 100px;
        margin-left: 495px;

        font-family: Poppins;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        letter-spacing: 0%;
        color: white;
    }

    > .oi {
        display: grid;

        grid-template-columns: 151px 151px 676px 151px;
        grid-template-rows: 64px 64px 64px 64px;

        color: white;
        margin: 50px auto;

        width: 1132px;

        font-family: Roboto;

        > .header {
            display: grid;
            align-items: center;

            border: 2px solid #192227;
            padding-left: 25px;

            font-weight: 700;
            font-size: 14px;
            line-height: 160%;
            letter-spacing: 0%;
            vertical-align: middle;
        }

         > div {
            display: flex;
            gap: 10px;
            align-items: center;

            border: 2px solid #192227;
            padding-left: 25px;

            font-family: Roboto;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            letter-spacing: 0%;
            vertical-align: middle;

            > .icon {
                width: 8;
                height: 8;
                color: red;
            }
        }
    }
`