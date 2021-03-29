import styled from "styled-components";
import { devices } from '../utils/styled-utils';


const StyledMoviePage = styled.div`
    display: flex;
    flex-direction: column;

    .nominate{
        height: 50px;
        left: 0;
        margin-left:20px;
        width: 50px;
        border-radius:50%;
        top: -25px;
        background-color: ${props=>props.theme.yellow};
    }
    .poster{
        height: 450px;
        
        .image{
            width: 100%;
            img{
                object-fit: cover;
            }
        }

        .details{
            background-image: linear-gradient(to right, rgba(0,0,0,.9), transparent);
            padding: 30px 20px;
            position: absolute;
            top:0;
            left:0;
            right: 0;
            bottom: 0;

            .back{
                margin-left: -5px;
                color: white;
            }
            
            h1{
                color: white;
                font-size: 24px;
                margin-bottom:4px;
                margin-top:40px;
            }

            p{
                color: #9c9d9e;
                margin-top: 2px;
                font-weight: 500;
            }

            .nominate-lg{
                width:auto;
                border-radius: 40px;
                margin:0;
                font-size:15px;
                margin-top: 30px;
                display: none;
                font-weight: 600;
            }
        }
    }

    .page-details{
        margin-top: -30px;
        background-color: white;
        z-index:5;
        border-radius: 15px 15px 0 0;
        padding: 40px 20px 30px 20px;

        .rating{
            b{
                color: ${props=>props.theme.dark_blue};
            }

            span{
                color: #878991;
            }
        }

        .genre{
            
        }

        .plot{
            color: #878991;
        }
        
        .cast{
            h4 {
                color: ${props=>props.theme.dark_blue};
            }
        }

        .actor{
            padding: 4px 10px;
            border: 1px solid rgba(0,0,0,.15);
            border-radius:4px;
            font-size:14px;
            font-weight:600;
            color: ${props=>props.theme.dark_blue}
        }
    }

    ${ devices.phoneM}{
        .nominate-sm{
            display: none;
        }
        .poster{
            display:flex;
            padding: 20px 16px;
             & > div {
                 display: flex;
                 .image{
                    min-width: 300px;
                    max-width:500px;
                    border-radius: 10px;
                    overflow: hidden;
                    flex: 1 1 auto;
                }
                
                .details{
                    position: relative;
                    margin-left: 20px;
                    background-image: none;
                    background-color:transparent;
                    max-width:500px;

                    .back{
                        color: black;
                    }

                    .nominate-lg{
                        display: flex;
                        max-width: 200px;
                    }

                    h1{
                        font-size: 40px;
                        font-weight:800;
                        margin-top: 20px;
                        color: ${props=>props.theme.dark_blue};
                    }
                }
             }
        }

        .page-details{
            margin-top:0px;
            max-width: 800px;
        }
    }
`;

export default StyledMoviePage;