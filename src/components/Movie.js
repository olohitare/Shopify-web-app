import React from 'react';
import StyledMovie from '../styled/StyledMovie';
import Placeholder from '../images/movie.png';
import { Award } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { useNominationContext } from '../context/NominationContext';

const Movie = ({ movie }) => {
    const { Poster, Title, Type, Year, imdbID } = movie;
    const history = useHistory();
    const { addNomination, nominations } = useNominationContext();

    const toMovie = React.useCallback(()=>{
        history.push(`/movie/${imdbID}`);
    },[imdbID])

    const addToNominations = React.useCallback((movie)=>{
        addNomination(movie)
    },[addNomination]);

    const exists = React.useMemo(()=>{
        return Boolean(nominations.find(nomination=>nomination.imdbID === imdbID))
    },[imdbID,nominations])


    return ( 
        <StyledMovie>
            <div onClick = {toMovie} className = "poster cursor-pointer w-full relative">
                <div className="h-full w-full">
                    {
                        Poster === 'N/A' ?
                        <img 
                        className = "h-full w-full" 
                        src={Placeholder} 
                        alt=""/>:

                        <img 
                        className = "h-full w-full" 
                        src = { Poster } 
                        alt = ""/>
                    }
                </div>
                <span className = "type-tag px-3 py-1 absolute rounded-full">
                    { Type }
                </span>
            </div>
            <div className="details mt-2">
                <div>
                    <h4>
                        { Title }&nbsp;
                        &#183;
                        &nbsp;
                        <span>
                            { Year }
                        </span>
                    </h4>
                </div>
                <div className="flex justify-between mt-3">
                    <button
                    disabled = {exists}
                    onClick = { ()=>addToNominations(movie) } 
                    className = "flex border-none nominate cursor-pointer">
                        <Award size = {18}/>&nbsp;
                        Nominate
                    </button>
                </div>
            </div>
        </StyledMovie>
     );
}
 
export default Movie;