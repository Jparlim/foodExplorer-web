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

        > a {
            text-decoration: none;
            color: #E1E1E6;

            font-family: Roboto;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: 0%;
            text-align: center;
            vertical-align: middle;

            width: 108;
            height: 16;
            top: 16px;
            left: 561px;


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
    
    > .pagamento {
        grid: 1;
        height: 81.7vh;

        display: flex;
        gap: 150px;

        justify-content: space-evenly;

        > .meupedidos {
            display: flex;
            flex-direction: column;

            gap: 20px;
            color: white;

            > h1 {
                width: 191;
                height: 45;

                margin: 120px 0 40px 0;

                font-family: Poppins;
                font-weight: 500;
                font-size: 32px;
                line-height: 140%;
                letter-spacing: 0%;
            }

            > ul {
                display: flex;
                flex-direction: column;

                width: 444px;
                min-height: 104px;

                > li {
                    display: flex;

                    width: 403px;
                    height: 104px;
                    gap: 13px;
                    padding-top: 16px;
                    padding-bottom: 16px;

                    align-items: center;

                    position: relative;

                    > img {
                        width: 72px;
                        height: 72px;
                        top: 16px;
                    }

                    > p {
                        font-family: Poppins;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 160%;
                        letter-spacing: 0%;

                        margin-bottom: 20px;
                    }

                    > .price {
                        font-family: Roboto;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 160%;
                        letter-spacing: 0%;

                    }

                    > button {
                        width: 36;
                        height: 19;
                        top: 58.5px;
                        left: 85px;
                        gap: 10px;

                        font-family: Roboto;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 160%;
                        letter-spacing: 0%;

                        color: #AB4D55;
                        background: none;
                        border: none;

                        cursor: pointer;

                        position: absolute;
                    }
                }
            }

            > p {
                font-family: Poppins;
                font-weight: 500;
                font-size: 20px;
                line-height: 160%;
                letter-spacing: 0%;

            }
        }

        > .pag {
            display: flex;
            flex-direction: column;

            color: white;
    
            > h1 {
                width: 191px;
                height: 45px;
                top: 138px;
                left: 642px;
    
                margin: 120px 0 40px 0;

                font-family: Poppins;
                font-weight: 500;
                font-size: 32px;
                line-height: 140%;
                letter-spacing: 0%;
            }

            > .tableofthepag {
                display: flex;
                flex-direction: column;
                align-items: center;

                

                width: 530px;
                height: 445px;

                border: 1px solid #76797B;

                > div:nth-child(1) { 
                    display: flex;
                    justify-content: space-around;
                    width: 530px;
                    height: 81px;

                    > button {
                        width: 265px;
                        height: 81px;

                        border-top-left-radius: 8px;
                        gap: 8px;
  
                        border-top-width: 1px;
                        border-left-width: 1px;
  
                        padding-top: 12px;
                        padding-right: 14px;
                        padding-bottom: 12px;
                        padding-left: 14px;

                        cursor: pointer;

                        background: none;
                        border: none;
                        color: white;

                        border: 1px solid #76797B;

                        justify-content: center;
                        align-items: center;
                        display: flex;

                        > .icon {
                            width: 24px;
                            height: 18px;
                        }
                    }
                }

                > .credito {
                    display: flex;
                    flex-direction: column;

                    margin: auto;

                    width: 348px;
                    height: 274px;

                    gap: 37px;

                    > div:nth-child(1) {
                        display: flex;
                        flex-direction: column;

                        width: 348px;
                        height: 72px;
                        gap: 8px;

                        > p {
                            font-family: Roboto;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 100%;
                            letter-spacing: 0%;
                        }

                        > input {
                            width: 348px;
                            height: 48px;

                            border-width: 1px;
                            gap: 14px;
                            
                            border-radius: 5px;
                            padding-top: 12px;
                            padding-right: 14px;
                            padding-bottom: 12px;
                            padding-left: 14px;

                            background: none;
                            border: 1px solid #FFFFFF;
                            color: white;
                        }
                    }

                    > div:nth-child(2) {
                        display: flex;

                        gap: 17px;

                        > div {
                            display: flex;
                            flex-direction: column;

                            width: 166px;
                            height: 72px;
                            gap: 8px;

                            > p {
                                font-family: Roboto;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 100%;
                                letter-spacing: 0%;
                            }

                            > input {
                                width: 166px;
                                height: 48px;
                                border-width: 1px;
                                gap: 14px;
                                border-radius: 5px;
                                padding-top: 12px;
                                padding-right: 14px;
                                padding-bottom: 12px;
                                padding-left: 14px;

                                background: none ;
                                border: 1px solid #FFFFFF;
                            }
                        }
                    }

                    > button {
                        width: 348px;
                        height: 56px;

                        opacity: 0.8;
                        gap: 8px;
                        
                        border-radius: 5px;
                        padding-top: 12px;
                        padding-right: 32px;
                        padding-bottom: 12px;
                        padding-left: 32px;

                        border: none;
                        background-color: #750310;
                        
                        color: white;
                        font-family: Poppins;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 24px;
                        letter-spacing: 0%;
                        text-align: center;
                        vertical-align: middle;

                        cursor: pointer;
                        

                    }
                }

                > img {
                    margin: auto;

                    width: 250px;
                    height: 250px;
                }
            }

            
        }
    }

`