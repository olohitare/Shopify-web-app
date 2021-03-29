import React from 'react';
import Skeleton from 'react-loading-skeleton';
import StyledMoviesSkeleton from '../styled/StyledMoviesSkeleton';

const MoviesSkeleton = ({number = 10}) => {
    return ( 
        <StyledMoviesSkeleton>
            {
                new Array(number).fill("").map((_,index)=>{
                    return (
                        <div key = {index}>
                            <div>
                                <Skeleton height = {150}/>
                            </div>
                            <div className="mt-2">
                                <Skeleton style = {{maxWidth: '80%'}}/>
                                <Skeleton height = {12} width = {120}/>
                            </div>
                        </div>
                    )
                })
            }
        </StyledMoviesSkeleton>
    );
}
 
export default MoviesSkeleton;