import styled from "styled-components";
import { devices } from '../utils/styled-utils';

const StyledPageLayout  = styled.div`
    height: 100vh;
    main{
        background-color: ${props=>props.theme.grey};
        height: 100%;
        width: 100%;
    }

    footer{
        position: fixed;
        z-index:120;
        bottom: 0;
        width: 100vw;
        height: 60px;
        background-color: ${props=>props.theme.white};

        ul{
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;

            li{
                
                a{
                    svg{
                        color: #ccc;
                    } 

                    &.active{
                        svg{
                            color: ${props=>props.theme.dark_blue};
                        }
                    }
                }

                .nominations-count{
                    height:14px;
                    width:14px;
                    border-radius: 50%;
                    top:0;
                    right:0;
                    color: white;
                    font-size:10px;
                    background-color: ${props=>props.theme.yellow};
                }
            }


        }
    }

    ${devices.tablet}{
        display: flex;
        flex-direction: row-reverse;
        footer{
            position: relative;
            width: 80px;
            height:100%;
            padding: 50px 0;
            
            ul{
                flex-direction: column;
                justify-content: flex-start;
                row-gap: 20px;
            }
        }
    }
`;

export default StyledPageLayout;