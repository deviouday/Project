import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import Searchicon from './search.svg';

// const movie ={
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//     };


//ef5b7899
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=ef5b7899';
const App=()=>{
    const [movies, setmovies ] = useState([]);
    const [searchterm,setsearchterm]=useState('');

    const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
        
    }
    useEffect(()=>{
        searchmovies('Batman');
    }, [])
    return(
        <div className="app">
            <h1>MovieWorld</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchterm}
                    onChange={(e) =>setsearchterm(e.target.value)}
                />
                <img
                src={Searchicon}
                alt="searchicon"
                onClick={()=>searchmovies(searchterm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) 
                : 
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}
export default App;