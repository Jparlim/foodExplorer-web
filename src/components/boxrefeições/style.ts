import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: -130px auto;

    width: 1122px;
    height: 2400px;


    
    > h1 {
        color: var(--Light-Light-300, #E1E1E6);

        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 23px;
        margin-left: 0px;
    }

    > div {
        display: flex;

        justify-content: center;

        width: 1122px;
        height: 529px;

        gap: 27px;

        position: relative;

        overflow: hidden;

        > .boxscrollleft {
            width: 224px;
            height: 462px;
            flex-shrink: 0;

            background: linear-gradient( 270deg, rgba(0, 10, 15, 0.47) 0%, #000A0F 100%);
            
            left: 0;

            position: absolute;
            z-index: 1;

            display: flex;
            align-items: center;

            > .icon {
                width: 40px;
                height: 40px;
                flex-shrink: 0;

                margin-left: 39px;

                color: #E1E1E6;
            }
        }

        > .boxscrollright {
            width: 224px;
            height: 465px;
            flex-shrink: 0;

            background: linear-gradient( 90deg, rgba(0, 10, 15, 0.47) 0%, #000A0F 100%);

            right: 0;

            position: absolute;
            z-index: 1;
            
            display: flex;
            align-items: center;

            > .icon {
                width: 40px;
                height: 40px;
                flex-shrink: 0;

                margin-left: 116px;

                color: #E1E1E6;
            }
        }
    }
`

