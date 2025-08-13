import React from 'react'
import { useMovieContexts } from '../contexts/MovieContexts';

export const MovieCard = ({movie}) => {
  const { addFavourite, removeFavourite, isFavourite } = useMovieContexts();
  const isFavouriteMovie = isFavourite(movie.id);
      function onFavouriteClick(e) {
    e.preventDefault();
    if(isFavouriteMovie) {
      removeFavourite(movie.id); 
    } 
    else
      addFavourite(movie);

    }
  return (
  
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className={`favourite-button ${isFavouriteMovie ? 'favourite-active' : ''}`} onClick={onFavouriteClick}>like</button>
            </div>
        </div>
        <div className="movie-info">
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-description'>{movie.description}</p>
        </div>
    </div>
    

  )
}
