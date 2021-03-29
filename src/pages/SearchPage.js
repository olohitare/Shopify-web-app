import React from 'react';
import { Award, Search } from 'react-feather';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import Movie from '../components/Movie';
import MoviesSkeleton from '../components/MoviesSkeleton';
import { useNominationContext } from '../context/NominationContext';
import { MovieServices } from '../services/movies-services';
import StyledSearchPage from '../styled/StyledSearchPage';

const SearchPage = () => {
    const [searchQuery,setSearchQuery] = React.useState("");
    const { nominations } = useNominationContext();
    const [customError, setError] = React.useState({
        error: false,
        message: false
    })

    const history = useHistory();

    const { isLoading, data:response, isError } = useQuery(
        ['movies-title', searchQuery], 
        ()=>MovieServices.fetchMoviesByTitle(searchQuery),
        {
            enabled: searchQuery.length > 1
        }
    )

    const handleSearchChange = React.useCallback((event)=>{
        const value = event.target.value;
        setSearchQuery(value)
    },[searchQuery]);

    const toNominationPage = React.useCallback(()=>{
        history.push('/nominations');
    },[])

    const movies = React.useMemo(()=>{
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
    },[response])

    return ( 
        <StyledSearchPage className = "flex flex-col">
            <header className = "flex items-center">
                <div className = "relative search-container w-full">
                    <input 
                    onChange = {handleSearchChange}
                    value = {searchQuery} 
                    className = "w-full" 
                    type="text"/>
                    <span className = "absolute centered search-icon left-0">
                        <Search/>
                    </span>
                </div>
            </header>
            <div className = "flex-grow main">
                {
                    isError ?
                    <div cla>

                    </div>:
                    customError.error ?
                    <div className = "h-full w-full">
                        { customError.message }
                    </div>:
                    isLoading ?
                    <div>
                        <MoviesSkeleton/>
                    </div>:
                    <div className = "h-full">
                        {
                            movies?.length === 0 ?
                            <div className="no-movies">

                            </div>:
                            <div className = "MoviesList pb-4 h-full">
                                {
                                    movies.map((movie)=>
                                        <div  
                                        key = { movie.imdbID } 
                                        >
                                            <Movie movie = {movie}/>
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </div>
                }
            </div>
            <button 
            onClick = {toNominationPage} className = "nomination-count centered">
                {nominations.length} <Award/>
            </button>
        </StyledSearchPage>
    );
}
 
export default SearchPage;