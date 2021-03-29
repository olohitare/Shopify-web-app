import styled from "styled-components";
import { devices } from '../utils/styled-utils';

const StyledSearchPage = styled.div`
    overflow:hidden;
    height: 100vh;
    
    header{
        padding: 0 16px;
        height: 70px;
        flex-shrink:0;
        box-shadow: 0px 2px 3px rgba(0,0,0,.2);

        .search-container{
            max-width:500px;
            margin: 0 auto;
        }

        input{
            height:45px;
            padding: 0 0 0 40px;
            border-radius:5px;
            border: 1px solid rgba(0,0,0,.16);
            font-size:16px;
        }

        .search-icon{
            top: 0;
            bottom: 0;
            left: 0;
            width:40px;
        }
    }

    .main{
        overflow-y: auto;
        padding-bottom:100px;
        padding: 20px 16px;

        .MoviesList{
            display: flex;
            flex-direction: column;
            row-gap: 25px;
        }
    }

    .nomination-count{
        position: fixed;
        bottom: 0;
        right:0;
        height:50px;
        width:50px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0px 3px 7px rgba(0,0,0,.14);
        margin: 15px;
        border:none;
        font-size:16px;
        z-index:1000;

        svg{
            color: ${props=>props.theme.dark_blue};
        }
    }

    ${devices.phoneM}{
        .main{
            .MoviesList{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap:25px 16px;
            }
        }
    }
`;

export default StyledSearchPage;