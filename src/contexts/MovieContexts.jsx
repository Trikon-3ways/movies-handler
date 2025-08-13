import React, { use } from 'react'
import { createContext,useContext,useState,useEffect } from 'react'

const MovieContext = createContext();

export const useMovieContexts = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(storedFavourites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => [...prevFavourites, movie]);
    }
    const removeFavourite = (movieId) => {
        setFavourites((prevFavourites) => prevFavourites.filter(movie => movie.id !== movieId));
    }
    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId);
    }

    const value=
    {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite 
    }

    return <MovieContext.Provider value={value}> {children}</MovieContext.Provider>
}
