import React from 'react';
import NominationContext from './NominationContext';
import NotificationContext from './NotificationContext';

const AppContext = ({ children, showBadge }) => {
    return ( 
        <NotificationContext>
            <NominationContext showBadge = {showBadge}>
                { children }
            </NominationContext>
        </NotificationContext>
    );
}
 
export default AppContext;