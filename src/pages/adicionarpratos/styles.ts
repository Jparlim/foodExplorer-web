import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

   

    > button {
        background: none;
        border: none;

        color: white;

        display: flex;
        align-items: center;

        color: var(--Light-Light-300, #E1E1E6);

        margin: 40px 0 24px 123px;

        > .icon {
            width: 32px;
            height: 32px;
            flex-shrink: 0;
        }

        > p {
            color: var(--Light-Light-300, #E1E1E6);

            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
        }
    }

    > h1 {
        color: var(--Light-Light-300, #E1E1E6);

        /* Poppins/400-medium */
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;

        margin: 24px 0 32px 123px;
    }

    > .adicionar {
        display: flex;
        flex-direction: column;

        color: white;

        margin: auto;
        min-height: 100vh;
        flex-grow: 1;

        width: 1120px;

        border: 1px solid red;

        margin: 0 123px 116px 122px;

        > .name {
            display: flex;
            gap: 32px;

            
            > div {
                display: flex;
                flex-direction: column;

                gap: 16px;
                border: 1px solid red;


                > p {
                    color: var(--Light-Light-400, #C4C4CC);

                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 100%;
                }

                > input:focus {
                    margin: none;
                }
            }

            > div:nth-child(1) {
                display: flex;
                height: 80px;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;

                > .importimg {
                    display: flex;
                    padding: 12px 32px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    background-color: pink;

                    border-radius: 8px;
                    background: var(--Dark-Dark-800, #0D161B);

                    > .icon{
                        width: 24px;
                        height: 24px;
                    }

                    > input {
                        opacity: 0;
                        width: 0px;
                    }
                }
            }

            > div:nth-child(2) {
                > input {
                    height: 48px;
                    padding: 12px 14px;
                    align-items: center;

                    border: none;
                    width: 435px;

                    border-radius: 8px;
                    background: var(--Dark-Dark-800, #0D161B);
                }
            }


        }
    }


`