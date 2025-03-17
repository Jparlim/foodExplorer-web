import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 77px;
    padding: 24px 123px;
    
    align-items: center;
    gap: 8px;

    background: var(--Dark-Dark-600, #00111A);

    > .footerbox {
        display: flex;
        justify-content: space-between;

        height: 29.511px;
        align-items: center;
        flex: 1 0 0;

        > div {
            display: flex;
            gap: 10px;

            > .icon {
                width: 30px;
                height: 30px;
                flex-shrink: 0;
    
                fill: var(--Light-Light-700, #4D585E);
            }
    
            > h1 {
                color: var(--Light-Light-700, #4D585E);
    
                font-family: Roboto;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
    }

    > p {
                color: var(--Light-Light-200, #FFFAF1);

                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;

            }

    }
`