import React, { useState } from 'react';
import NotificationType from '../constants/notification-type';

const Context = React.createContext();

const NotificationContext = ({children}) => {
    const [ notifications, setNotifications ] = useState([]);

    const addNotification = React.useCallback((type, title, message)=>{
        setNotifications(notifications=>[...notifications,
        {
            id: `${Date.now()}${notifications.length}`,
            type,
            title,
            message
        }])
    },[])

    const removeNotification = React.useCallback((notificationId)=>{
        let notificationIndex = notifications
        .findIndex(notification=>notification.id === notificationId);

        let copy = [...notifications];

        if( notificationIndex !== -1){
            copy.splice(notificationIndex,1);
            setNotifications(copy)
        }

    },[notifications])

    return ( 
        <Context.Provider value = {{
            notifications,
            addNotification,
            removeNotification
        }}>
            { children }
        </Context.Provider>
     );
}

const useNotificationContext = ()=>React.useContext(Context);
 
export { NotificationContext as default, useNotificationContext };