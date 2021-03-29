import styled from "styled-components";

const StyledMovie = styled.div`
    .poster{
        height: 160px;
        border-radius: 7px;
        overflow: hidden;

        img{
            object-fit: cover;
        }
        
        .type-tag{
            background-color: rgba(0,0,0,.5);
            color: white;
            z-index: 10;
            right: 0;
            margin: 5px;
            top:0;
            font-weight:500;
            text-transform: uppercase;
            font-size: 10px;
            border-radius:15px;
        }
    }

    .details{
        h4{
            color: ${props=>props.theme.dark_blue};
            font-weight: 600;
        }
        .nominate{
            padding: 7px 10px;
            border-radius: 20px;
            font-weight:500;
            background-color: ${props=>props.theme.yellow};
            color: ${props=>props.theme.white};
            line-height:20px;
            font-weight:500;

            :disabled{
                opacity: 0.3;
            }
        }
    }
`;

export default StyledMovie;
