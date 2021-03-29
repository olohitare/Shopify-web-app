import styled from "styled-components";
import { devices } from '../utils/styled-utils';


const StyledHomePage = styled.div`
    height: 100%;
    overflow: hidden;

    header{
        height: 70px;
        padding: 0 16px;

        h1{
            color: ${ props=>props.theme.dark_blue};
            font-size:24px;
        }

        button{
            height:35px;
            width:35px;
            border-radius:4px;
            background:none !important;

            :hover{
                background-color: rgba(0,0,0,.1);
            }
        }
    }

    .loading{
        padding: 0 16px;
    }

    .MovieList{
        height:100%;
        overflow-y: auto;
        row-gap: 30px;
        padding: 0 16px;
        padding-bottom:150px;
        display:flex;
        flex-direction: column;
        row-gap: 25px;
    }

    ${devices.phoneM}{
        .MovieList{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap:25px 16px;
        }
    }
`;

export default StyledHomePage;