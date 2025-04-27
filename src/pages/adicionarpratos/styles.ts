import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    main {
        display: flex;
        flex-direction: column;

        margin:  0 auto 0 ;
        justify-content: start;

        min-height: 100vh;
        flex-grow: 1;
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

            > .lab {
                display: flex;

                width: 821px;
                height: 48px;
                padding: 4px 8px;
                
                align-items: center;
                gap: 16px;
                align-self: stretch;

                border: none;
                border-radius: 8px;
                background: var(--Dark-Dark-800, #0D161B);

                /* position: relative; */

                > ul {
                    display: flex;
                    gap: 16px;

                    > li {
                        display: flex;
                        padding: 10px 16px;

                        gap: 10px;
                        
                        align-items: center;
                        list-style: none;

                        width: auto;
                        height: 32px;
                        border-radius: 8px;

                        background-color: #76797B;

                        cursor: default;

                        color: #FFFFFF;
                        font-family: Roboto;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        vertical-align: middle;
                        
                        > .icon {
                            cursor: pointer;

                            color: #FFFFFF;
                        }
                    }
                }
            }

            > .lab button {
                display: flex;
                justify-content: center;

                cursor: pointer;

                margin: auto 0;

                background-color: #0D161B;

                border: 2px dashed #7C7C8A;
                border-radius: 8px;
                padding: 4px 8px;
                
                height: 32px;
                width: 116px;

                font-family: Roboto;
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0%;

                color: #7C7C8A;
            }

            > .lab input {

                margin: auto 0;

                height: 32px;
                padding: 4px 8px;

                color: white;
                
                align-items: center;
                gap: 16px;
                align-self: stretch;

                border: none;
                border-radius: 8px;
                background: #76797B;
            }

            > .lab input:focus {
                outline: none;
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

    > main .descrição {
        display: flex;
        flex-direction: column;

        width: 1120px;
        margin: 0 123px 50px 122px;

        gap: 16px;

        > p {
            color: var(--Light-Light-400, #C4C4CC);

            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;

            align-self: stretch;
        }

        > input {
            display: flex;
            align-items: flex-start;

            height: 172px;
            padding: 14px;

            border-radius: 8px;
            border: none;
            background: var(--Dark-Dark-800, #0D161B);
        }

        > input:focus {
            outline: none;
            color: white;
        }

        > button {
            display: flex;

            margin: 25px 0 0 950px;

            padding: 12px 24px;
            width: 172px;
            height: 48px;
            
            gap: 8px;

            border-radius: 5px;
            background: var(--Tints-Tomato-400, #AB4D55);

            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 171.429% */

            transition: all ease 0.3s ;
        }

        button:hover {
            background-color:rgb(200, 32, 51);
            transform: scale(1.05);
        }

        button:active {
            background-color:rgb(117, 21, 32);
            transform: scale(0.98);
        }

        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            opacity: 0.6;
        }

        }

`