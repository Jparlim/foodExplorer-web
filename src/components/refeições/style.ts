import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 304px;
    height: 462px;

    background-color: #00070A;

    align-items: center;
    gap: 15px;
    padding: 24px;

    border-radius: 8px;
    border: 1px solid var(--Dark-Dark-300, #000204);
    background: var(--Dark-Dark-200, #00070A);

    > .icon {
        width: 24px;
        height: 22px;

        color: white;
    }

    > img {
        width: 176px;
        height: 176px;
    }

    > h1 {
        color: var(--Light-Light-300, #E1E1E6);
    text-align: center;

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    }

    > p {
        color: var(--Light-Light-400, #C4C4CC);
        text-align: center;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
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
    }

    > div {
        display: flex;
        align-items: center;
        gap: 16px;

        > .quantidade {
            display: flex;
            width: 100px;
            height: 32px;
            justify-content: center;
            align-items: center;
            gap: 14px;

            > .icon {
                width: 24px;
                height: 24px;
                flex-shrink: 0;

                color: white;
            }
        }

        > button {
            display: flex;
            padding: 12px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;
        }
    }
` 