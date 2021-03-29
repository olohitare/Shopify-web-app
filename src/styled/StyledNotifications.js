import React from 'react';
import styled from 'styled-components';

const StyledNotifications = styled.div`
    position: fixed;
    width:100vw;
    max-width: 400px;
    bottom: 0;
    right: 0;
    z-index: 200;
    pointer-events:none;
    padding:20px 16px;
    display: flex;
    flex-direction: column;
    row-gap:10px;
`;

export default StyledNotifications;