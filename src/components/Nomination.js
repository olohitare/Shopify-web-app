import React from 'react';
import { Minus } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { useNominationContext } from '../context/NominationContext';
import StyledNomination from '../styled/StyledNomination';

const Nomination = ({ nomination }) => {
    const { imdbID, Title, Poster, Year } = nomination;
    const history = useHistory();
    const { removeNomination } = useNominationContext();

    const toMoviePage = React.useCallback(()=>{
        history.push(`movie/${imdbID}`)
    },[imdbID]);

    const remove = React.useCallback((event)=>{
        event.stopPropagation();
        removeNomination(imdbID);
    },[imdbID,removeNomination])

    return ( 
        <StyledNomination onClick = {toMoviePage} className = "relative">
            <div className = "poster">
                <img className = "h-full w-full" src={ Poster } alt=""/>
            </div>
            <div className = "details flex items-end absolute inset-0">
                <div className = "flex w-full gap-x-2 justify-between">
                    <div className = "flex-grow min-w-0">
                        <h3 className = "truncate">{Title}</h3>
                        <p>{Year}</p>
                    </div>
                    <div className = "flex-shrink-0 ml-3">
                        <button onClick = {remove} className = "remove centered flex cursor-pointer items-center">
                            <Minus/>
                        </button>
                    </div>
                </div>
            </div>
        </StyledNomination>
     );
}
 
export default Nomination;