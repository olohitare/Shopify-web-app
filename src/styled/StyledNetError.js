import styled from "styled-components";

const StyledNetError = styled.div`
    .icon{
        height: 50px;
        width:50px;
    }

    p{
        color: #7b7c87;
    }

    button{
        background-color: ${props=>props.theme.yellow};
        border:none;
        color: white;
        padding: 7px 15px;
        border-radius:20px;
        margin-top:10px;
        font-size: 14px;
        font-weight:500;
    }
`;


export default StyledNetError;