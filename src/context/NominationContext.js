import React, { useState } from 'react';
import _ from 'lodash';
import NotificationTypes from '../constants/notification-type';
import { useNotificationContext } from './NotificationContext';
import { NOMINATIONS } from '../constants/general';

const Context = React.createContext();
const MAX_NOMINATIONS = 5;

const nominationsFromLocalStorage = localStorage.getItem(NOMINATIONS);

console.log({nominationsFromLocalStorage})

const NominationContext = ({children, showBadge}) => {
    const [ nominations, setNominations ] = useState( nominationsFromLocalStorage ? JSON.parse(nominationsFromLocalStorage) : []);
    const { addNotification } = useNotificationContext();

    const addNomination = React.useCallback((movie)=>{
        if(nominations.length < MAX_NOMINATIONS){
            setNominations(nominations=>
                _.uniqBy([...nominations,movie], movie=>movie.imdbID)
            )
        }else{
            addNotification(
                NotificationTypes.INFO, 
                "Maximum nominations reached!",
                `You have added the maximum (${MAX_NOMINATIONS}) nominations`
            )
        }
    },[nominations])

    const removeNomination = React.useCallback((nominationId)=>{
        let nominationIndex = 
        nominations.findIndex((nomination)=>nomination.imdbID === nominationId);
        if(nominationIndex !== -1){
            let newNominations = [...nominations];
            newNominations.splice(nominationIndex,1);
            setNominations(newNominations)
        }
    },[nominations])

    React.useEffect(()=>{
        if(nominations.length === MAX_NOMINATIONS){
            showBadge();
        }
        localStorage.setItem(NOMINATIONS,JSON.stringify(nominations))
    },[nominations])

    return ( 
        <Context.Provider value = {{
            nominations,
            addNomination,
            removeNomination
        }}>
            { children }
        </Context.Provider>
     );
}

const useNominationContext = ()=>React.useContext(Context);
 
export { NominationContext as default, useNominationContext };