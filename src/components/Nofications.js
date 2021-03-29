import React from 'react';
import { useNotificationContext } from '../context/NotificationContext';
import StyledNotifications from '../styled/StyledNotifications';
import Notification from './Notification';
import { animated, useTransition } from 'react-spring';


const Notifcations = () => {
    const { notifications } = useNotificationContext();

    const transitions = useTransition(notifications,notification=>notification.id,{
        from: { transform: 'translateY(20px) scale(0.9)'},
        enter: { transform: 'translateY(0px) scale(1)'},
        leave: { transform: 'translateX(200px) scale(0)', opacity: 0},
    })
    return ( 
        <StyledNotifications>
            {
                transitions.map(({item, props, key})=>{
                    return (
                        <animated.div style = {props} key = {key}>
                            <Notification notification = {item}/>
                        </animated.div>
                    )
                })
            }
        </StyledNotifications>
    );
}

 
export default Notifcations;