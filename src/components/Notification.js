import React from 'react';
import { Check, Info, X } from 'react-feather';
import NotificationType from '../constants/notification-type';
import { useNotificationContext } from '../context/NotificationContext';
import StyledNotification from '../styled/StyledNotification';

const Notification = ({ notification }) => {
    const { type, title, message, id } = notification;
    const { removeNotification } = useNotificationContext();

    React.useEffect(()=>{
        let timeout = setTimeout(()=>{
            removeNotification(id)
        },3000);
        return ()=>{
            timeout && clearTimeout(timeout);
        }
    },[])

    const Icon = React.useMemo(()=>{
        switch(type){
            case NotificationType.SUCCESS:
                return Check;
            case NotificationType.ERROR:
                return X;
            case NotificationType.INFO:
                return Info
            default:
                return Check
        }
    },[type]);

    const color = React.useMemo(()=>{
        switch(type){
            case NotificationType.SUCCESS:
                return "#5cb85c";
            case NotificationType.ERROR:
                return "#d9534f";
            case NotificationType.INFO:
                return "#5bc0de"
            default:
                return "#5cb85c"
        }
    },[type])

    return ( 
        <StyledNotification className = "flex">
            <div>
                <Icon color = {color} size = {30}/>
            </div>
            <div className = "ml-2 flex justify-between flex-grow">
                <div>
                    <h3>
                        {
                            title
                        }
                    </h3>
                    <p>
                        {
                            message
                        }
                    </p>
                </div>
                <div className = "ml-1">
                    <span onClick = {()=>removeNotification(id)}>
                        <X size = {18} color = "#d7d8d9"/>
                    </span>
                </div>
            </div>
        </StyledNotification>
    );
}
 
export default Notification;