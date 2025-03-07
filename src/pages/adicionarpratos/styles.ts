import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > .close {
        color: white;
        display: flex;

        align-items: center;


        left: 430px;
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

    > h1 {
        color: var(--Light-Light-300, #E1E1E6);

        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }

    > .adicionar {
        display: flex;
        flex-direction: column;

        gap: 32px;

        > .name {
            > p {
                color: var(--Light-Light-400, #C4C4CC);

                /* Roboto/Small regular */
                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 16px */
            }

            > div {
                
            }
        }
    }
    } 
`