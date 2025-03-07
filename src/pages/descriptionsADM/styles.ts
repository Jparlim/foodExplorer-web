import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;

    > .head {
        display: flex;
        flex-direction: column;

        > .close {
            color: white;
            display: flex;

            align-items: center;

            position: absolute;

            top: 150px;
            
            > .icon {
                width: 32px;
                height: 32px;
                flex-shrink: 0;
            }

            > h1 {
                color: var(--Light-Light-300, #E1E1E6);

                font-family: Poppins;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 140%;
            }
        } 
    }

    > .body {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;

        gap: 55px;

        position: relative;

        > img {
            display: flex;
            width: 390.105px;
            height: 389px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
        }

        > .boxText {
            display: flex;
            flex-direction: column;

            width: 687px;
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;

            color: white;

            > h1 {
                color: var(--Light-Light-300, #E1E1E6);

     
                font-family: Poppins;
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;
            }

            > p {
                color: var(--Light-Light-300, #E1E1E6);

                font-family: Poppins;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
            }

            > .ingredientes {
                display: flex;

                gap: 12px;

                > div {
                    display: flex;
                    padding: 4px 8px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    border-radius: 5px;
                    background: var(--Dark-Dark-1000, #192227);

                    color: var(--Light-Light-100, #FFF);
                    text-align: center;

                    /* Poppins/100-medium */
                    font-family: Poppins;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 171.429% */
                }
            }

            > .concluir {
                display: flex;
                align-items: center;
                gap: 33px;

                > div {
                    display: flex;
                    gap: 14px;

                    align-items: center;

                    > p {
                        color: var(--Light-Light-300, #E1E1E6);

                        /* Roboto/Big bold */
                        font-family: Roboto;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 160%; /* 32px */
                    }

                    > .maisEmenos {
                        width: 24px;
                        height: 24px;
                        flex-shrink: 0;
                    }

                }
                
                > button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    border-radius: 5px;
                    background: var(--Tints-Tomato-100, #750310);

                    display: flex;
                    padding: 12px 24px;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;

                    border-style: none;

                    color: white;

                    cursor: pointer;
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

                > .signOut {
                    width: 32px;
                    height: 32px;

                    margin-left: 10px;
                }

            }
        
        }
    }
`