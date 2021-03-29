import axios from 'axios';



const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        apikey: process.env.REACT_APP_OMDB_PUBLIC_KEY
    }
})

export class MovieServices {
    static fetchMovies(text){
       return client.get('',{
           params: {
               s: text,
               page: 1
           }
       });
    }

    static fetchMoviesByTitle(title){
        return client.get('',{
            params: {
                s: title,
            }
        })
    }

    static fetchMovieById(movieId){
        return client.get('',{
            params: {
                i: movieId
            }
        })
    }
}


