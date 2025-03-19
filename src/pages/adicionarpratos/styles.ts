import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    main {
        display: flex;
        flex-direction: column;

        margin: auto;
        justify-content: start;

        min-height: 100vh;
        flex-grow: 1;

        border: 1px solid red;
    }
   

    > main button {
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

    > main h1 {
        color: var(--Light-Light-300, #E1E1E6);

        /* Poppins/400-medium */
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;

        margin: 24px 0 32px 123px;
    }

    > main .adicionar {
        display: flex;
        flex-direction: column;
        color: white;
        width: 1120px;

        margin: 0 123px 50px 122px;

        > .name {
            display: flex;
            gap: 32px;
            
            > div {
                display: flex;
                flex-direction: column;

                gap: 16px;


                > p {
                    color: var(--Light-Light-400, #C4C4CC);

                    font-family: Roboto;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 100%;
                }

                > input:focus {
                    outline: none;
                    color: white;
                }
            }

            > div:nth-child(1) {
                height: 80px;
                gap: 16px;

                width: 229px;

                > .importimg {
                    display: flex;
                    padding: 12px 32px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    width: 229px;

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

            > div:nth-child(3) {
                width: 100%;
                /* width: 370px; */

                > #Cat01 {
                    display: flex;
                    gap: 16px;

                    height: 48px;
                    padding: 16px;

                    border-radius: 5px;
                    background: var(--Dark-Dark-800, #0D161B);
                    color: var(--Light-Light-400, #C4C4CC);
                    

                    border: none;
                    outline: none;
                }

                > #Cat01 {

                }
            }

        }
    }

    > main .ingredientes {
        display: flex;
        gap: 32px;

        justify-content: start;

        margin: 0 123px 116px 122px;
        

        > div {

            > input:focus {
                outline: none;
                color: white;
            }
        }

        > div:nth-child(1) {
            display: flex;
            flex-direction: column;

            gap: 16px;

            > p {
                color: var(--Light-Light-400, #C4C4CC);

                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
            }

            > input {
                width: 821px;
                height: 48px;
                padding: 4px 8px;
                
                align-items: center;
                gap: 16px;
                align-self: stretch;

                border: none;
                border-radius: 8px;
                background: var(--Dark-Dark-800, #0D161B);
            }

          
        }

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;

            gap: 16px;
            width: 100%;

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
                padding: 12px 14px;

                align-items: center;
                height: 48px;

                border-radius: 8px;
                border: none;
                background: var(--Dark-Dark-800, #0D161B);
            }

            > input::placeholder {
                color: var(--Light-Light-500, #7C7C8A);

                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
            }
        }
    }

`