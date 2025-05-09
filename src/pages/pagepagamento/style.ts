import styled from "styled-components";

export const Container = styled.body`
    display: grid;

    > .navPag {
        display: flex;

        align-items: center;
        justify-content: center;

        width: 1368;
        height: 104;
        padding-top: 24px;
        padding-right: 123px;
        padding-bottom: 24px;
        padding-left: 123px;
        gap: 24px;

        background-color: #00111A;

        > .foodexplorer {
            display: flex;

            width: 197px;
            height: 30px;

            gap: 10px;

            > .icon {
                width: 30px;
                height: 30px;

                color: #065E7C;
            }

            > p{
                display: flex;
                color: white;

                font-weight: 700;
                font-size: 24px;
                font-family: Roboto/bigger bold;
                line-height: 28.13px;

                white-space: nowrap;
            }
        }

        > div {
            border: 1px solid red;
            position: relative;
        
            > .search {
                width: 24px;
                height: 24px;

                color: #C4C4CC;

                display: flex;
                justify-content: center;
                align-items: center;

                top: 10px;
                left: 10px;

                position: absolute;
            }

            > input {
                background-color: #0D1D25;
                border-style: none;

                display: flex;
                align-items: center;

                border-radius: 5px;

                    /* width: 581px; */
                width: 300px;
                height: 48px;

                padding: 12px 14px 12px 50px;
                gap: 14px;

                outline: none;

                font-weight: 400;
                font-size: 16px;
                line-height: 16px;
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

        > button:first-of-type {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 216px;
            height: 56px;

            background-color:rgb(152, 4, 21);

            border-radius: 5px;
            padding: 12px 32px 12px 32px;
            gap: 8px;

            border-style: none;

            color: white;

            cursor: pointer;
            transition: 0.3s ease, transform 0.2s ease;

            > p {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
            }

            > .receipt {
                width: 32px;
                height: 32px;
            }
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
            color: white;
        }
    }
    
    
`