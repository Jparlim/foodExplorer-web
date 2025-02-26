import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100vh;

    gap: 306px;

    > .textexplorer {

        display: flex;
        gap: 19px;

        > h1 {
            width: 255.564px;
            height: 47.168px;
            flex-shrink: 0;

            color: var(--Light-Light-100, #FFF);

            font-family: Roboto;
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        > .icon {
            width: 49.428px;
            height: 47.501px;
            flex-shrink: 0;

            fill: var(--Tints-Cake-100, #065E7C);
        }
    }

    > .signUp {
        border-radius: 16px;
        background: var(--Dark-Dark-700, #001119);

        display: inline-flex;
        padding: 64px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        > h1 {
            color: var(--Light-Light-100, #FFF);
            text-align: center;

            font-family: Poppins;
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
        }

        > ul {
            > li {

                display: flex;
                flex-direction: column ;
                gap: 8px;

                > p {
                    color: var(--Light-Light-400, #C4C4CC);

                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 100%;
                }

                > input {
                    display: flex;
                    width: 348px;
                    height: 48px;
                    padding: 12px 14px;
                    justify-content: center;
                    align-items: center;
                    gap: 14px;

                    color: white;

                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 100%;

                    border-radius: 8px;
                    opacity: 0.8;
                    background: var(--Dark-Dark-900, #0D1D25);  

                    border: none;
                    outline: none;
                }

                > input::placeholder {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;

                    font-family: Roboto/small regular;
                    color: #7C7C8A;
                }

                > input:focus {
                    color: white
                }

            }
        }

        > button {
            display: flex;
            padding: 12px 32px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            align-self: stretch;

            border-radius: 5px;
            background: var(--Tints-Tomato-100, #750310);

            border: none;
            color: white;

            color: var(--Light-Light-100, #FFF);
            text-align: center;

            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;

            transition: 0.3s ease, transform 0.2s ease;
        }

        button:hover {
            background-color: #750310;
            transform: scale(1.05);
        }

        button:active {
            background-color:rgb(97, 3, 14);
            transform: scale(0.98);
        }

        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            opacity: 0.6;
        }

        > h2 {
            color: var(--Light-Light-100, #FFF);
            text-align: center;

            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;

            cursor: pointer;
        }
    }
`