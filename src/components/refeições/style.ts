import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 304px;
    height: 462px;

    background-color: #00070A;

    align-items: center;
    padding: 24px;

    border-radius: 8px;
    border: 1px solid var(--Dark-Dark-300, #000204);
    background: var(--Dark-Dark-200, #00070A);

    position: relative;

    > .icon {
        width: 24px;
        height: 22px;

        position: absolute;
        right: 18px;
        top: 16px;

        color: white;
        padding: px;

        cursor: pointer;
        transition: all 0.5s ease;
    }

    > .icon.favorito {
        color: red;
    }

    > img {
        width: 176px;
        height: 176px;

        padding-top: 0;
    }

    > h1 {
        color: var(--Light-Light-300, #E1E1E6);
        text-align: center;

        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;

        margin-top: 15px;
        white-space: nowrap;
    }

    > p {
        color: var(--Light-Light-400, #C4C4CC);
        text-align: center;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        margin-top: 15px;
    }

    > .value {
        color: var(--Tints-Cake-200, #82F3FF);
        text-align: center;

        font-family: Roboto;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;

        height: 52px;
        flex: 1 0 0;

        margin-top: 15px;
    }

    > div {
        /* display: flex;
        align-items: center;
        gap: 16px;

        margin-top: 15px; */

        display: flex;
        width: 100px;
        height: 32px;
        justify-content: center;
        align-items: center;
        gap: 14px;

        > .quantidade {
            display: flex;
            width: 100px;
            height: 32px;
            justify-content: center;
            align-items: center;
            gap: 14px;

            color: #ccc;

            > .maisEmenos {
                width: 24px;
                height: 24px;
                flex-shrink: 0;

                cursor: pointer;

                transition: all ease;
            }
            
            > .maisEmenos:active {
                transform: scale(0.90) ;
            }

            > p {
                color: var(--Light-Light-300, #E1E1E6);

                font-family: Roboto;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 160%;
            }
        }

        > button {
            display: flex;
            padding: 12px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;

            color: #ccc;

            border: none;
            border-radius: 5px;
            background: var(--Tints-Tomato-100, #750310);

            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
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
` 