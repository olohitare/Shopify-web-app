import React from 'react';
import { Search } from 'react-feather';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import Movie from '../components/Movie';
import MoviesSkeleton from '../components/MoviesSkeleton';
import PageLayout from '../components/PageLayout';
import { MovieServices } from '../services/movies-services';
import StyledHomePage from '../styled/StyledHomePage';
import NetError from '../components/NetError';

const randomMoviesKeys = ['the am', 'very', 'dam', 'pet', 'sam', 'play'];

const HomePage = () => {
    const [customError, setError] = React.useState({
        error: false,
        message: false
    })
    const { isLoading, isError, data: response, refetch } = useQuery(
    'movies', 
    ()=>MovieServices.fetchMovies(randomMoviesKeys[Math.floor(Math.random() * randomMoviesKeys.length)])
    );
    const history = useHistory();
    const goToSearchPage = React.useCallback(()=>{
        history.push('/search')
    },[]);

    let movies = React.useMemo(()=>{
        if(!response) return [];
        if(response.data.Response === 'False'){
            setError({
                error: true,
                message: response.data.Error || 'Something went wrong'
            })
            return [];
        };
        setError({
            error: false,
            message: ''
        })
        return response.data.Search
    },[response]);


    return ( 
        <PageLayout>
            <StyledHomePage className ="flex flex-col">
                <header className = "flex items-center justify-between flex-shrink-0">
                    <h1>
                        Movies
                    </h1>
                    <div>
                        <button
                        onClick = {goToSearchPage} 
                        className = "border-none centered cursor-pointer">
                            <Search/>
                        </button>
                    </div>
                </header>
                <div className = "flex-grow main  h-full">
                    {
                        isError ?
                        <div>
                            <NetError reloadFn = {refetch}/>
                        </div>:
                        customError.error ?
                        <div>
                            <div className = "c-error">
                                { customError.message }
                            </div>
                        </div>:
                        isLoading ?
                        <div className = "loading">
                            <MoviesSkeleton/>
                        </div>:
                        <div className = "MovieList h-full">
                            {
                                movies.map((movie,index)=>
                                    <div  
                                    key = { `${ movie.imdbID }-${index}` } 
                                    >
                                        <Movie movie = {movie}/>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </StyledHomePage>
        </PageLayout>
    );
}
 
export default HomePage;