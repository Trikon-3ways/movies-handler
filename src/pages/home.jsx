import React, { use } from 'react'
import { MovieCard } from '../components/MovieCard';
import {useState,useEffect} from "react";
import { searchMovies,getPopularMovies } from '../services/api';

export const Home = () => {
    const [searchMovie,setSearchMovie]=useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }
        , []);
    function handleSearch(e){
        e.preventDefault();
        if (searchMovie.trim() === "") {
            setMovies([]);
            return;
        }
        setLoading(true);
        searchMovies(searchMovie)
            .then((data) => {
                setMovies(data);
                setError("");
            })
            .catch((err) => {
                setError("Failed to fetch movies");
            })
            .finally(() => {
                setLoading(false);
            });

    }
  return (
    <div className='home'>
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Search for a movie'  value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    <div className='movies-grid'>
        {movies.map((movie) =>  <MovieCard movie={movie} key={movie.id}/>
        )}
     </div>
     </div>
  )
}
