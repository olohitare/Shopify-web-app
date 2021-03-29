import styled from "styled-components";

const StyledNomination = styled.div`
    height: 170px;
    overflow: hidden;
    border-radius: 7px;
    .poster{
        height:100%;
        background-color: rgba(0,0,0,.1);
        img{
            object-fit: cover;
        }
    }

    .details{
        background-image: linear-gradient(transparent 10%, rgba(0,0,0,.9));
        
        & > div{
            padding: 10px 16px;
            color: white;

            p{
                color: #878991;
                font-weight: 600;
            }
        }

        .remove{
            border:none;
            background-color: rgba(255,255,255,.25);
            border-radius:5px;
            height: 35px;
            width: 35px;

            svg{
                color: #b21010;
            }
        }
    }
`;

export default StyledNomination;