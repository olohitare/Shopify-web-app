import styled from 'styled-components';

const StyledApp = styled.div`
    height: 100%;
    width:100%;
    background-color: ${ props=>props.theme.primaryColor };

    .badge{
        position: fixed;
        top: 30px;
        left: 0;
        right: 0;
        z-index:300;
        padding: 0 10px;
    }
`;

export default StyledApp;