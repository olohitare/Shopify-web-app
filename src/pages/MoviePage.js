import React from 'react';
import { Award, Check, ChevronLeft } from 'react-feather';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { MovieServices } from '../services/movies-services';
import StyledMoviePage from '../styled/StyledMoviePage';
import { useNominationContext } from '../context/NominationContext';

const MoviePage = () => {
    const { id } = useParams();
    const { isLoading, isError, data: response }  = useQuery(['movie', id], ()=>MovieServices.fetchMovieById(id), {
        enabled: !!id
    })
    
    const { Title, Poster, Actors, Year, Director, imdbID, imdbVotes, imdbRating, Plot, Genre } = response?.data || {};

    const { addNomination, nominations } = useNominationContext();

    const addToNominations = React.useCallback(()=>{
        if(response?.data){
            const { imdbID, Title, Poster,  } = response.data
            let movie = {
                imdbID,
                Title,
                Poster,
                Year
            }
            addNomination(movie)
        }
    },[response?.data, addNomination])

    const exists = React.useMemo(()=>{
        return Boolean(nominations.find(nomination=>nomination.imdbID === imdbID))
    },[imdbID,nominations])


    const actors = React.useMemo(()=>{
        if(!Actors) return [];
        return Actors.split(', ');
    },[Actors])

    const history = useHistory();

    return ( 
        <StyledMoviePage className = "h-full">
            <div className = "poster w-full flex-shrink-0">
                {
                    isLoading ?
                    <Skeleton height = {450} style = {{ borderRadius: 0}}/>:
                    <div className = "relative h-full w-full">
                        <div className = "image relative h-full">
                            <img className = "h-full w-full" src={Poster} alt=""/>
                        </div>
                        <div className = "details">
                            <span onClick = {()=>history.goBack()} className = "back cursor-pointer">
                                <ChevronLeft/>
                            </span>
                            <h1>
                                { Title }
                            </h1>
                            <p className = "writer"> { Director }</p>
                            <p className = "year"> { Year }</p>
                            <div onClick = {()=>addToNominations()} 
                            className="centered nominate nominate-lg flex items-center">
                                {
                                    exists ?
                                    <span className = "centered">
                                        <Check/>&nbsp; Nominated
                                    </span>:
                                    <span className = "centered">
                                        <Award/> &nbsp; Nominate
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className = "page-details relative flex-grow flex flex-col justify-between">
                <div onClick = {()=>addToNominations()} className="nominate nominate-sm absolute centered">
                    {
                        exists ?
                        <Check/>:
                        <Award/>
                    }
                </div>
                <div className = "flex-grow">
                    <div className = "mb-4">
                        {
                            isLoading ?
                            <Skeleton width = {100}/>:
                            <div className = "rating">
                                <b>
                                    {imdbRating}
                                </b>
                                &nbsp;
                                <span>
                                    ({ imdbVotes })
                                </span>
                            </div>
                        }
                    </div>
                    <div className = "mb-3">
                        {
                            isLoading ?
                            <>
                                <Skeleton height = {12} style = {{maxWidth: '80%'}}/>
                                <Skeleton height = {12} style = {{maxWidth: '60%'}}/>
                                <Skeleton height = {12} style = {{maxWidth: '95%'}}/>
                                <Skeleton height = {12} style = {{maxWidth: '50%'}}/>
                                <Skeleton height = {12} style = {{maxWidth: '89%'}}/>
                                <Skeleton height = {12} style = {{maxWidth: '89%'}}/>
                            </>:
                            <p className = "plot">
                                { Plot }
                            </p>
                        }
                    </div>
                    <div className = "cast">
                        {
                            isLoading ?
                            <Skeleton width = {100}/>:
                            <h4>Cast</h4>
                        }
                        <div className = "flex gap-1 mt-3 flex-wrap">
                            {
                                isLoading ?
                                new Array(4).fill('').map((_,i)=><Skeleton height = {20} key = {i} width = {100}/>)
                                :
                                actors.map(actor=>
                                <span className = "actor flex-shrink-0" key = {actor}>{actor}</span>)
                            }
                        </div>
                    </div>
                </div>
                {
                    isLoading ?
                    <Skeleton/>:
                    <div className = "genre">
                        { Genre }
                    </div>
                }
            </div>
        </StyledMoviePage>
     );
}
 
export default MoviePage;