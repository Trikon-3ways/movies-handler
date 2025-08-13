import React from 'react'
import { useMovieContexts } from '../contexts/MovieContexts';
import { MovieCard } from '../components/MovieCard';

export const Favourites = () => {
  const { favourites } = useMovieContexts();
  if (favourites.length > 0) {
    return (
      <div className="favourites">
        <h1>My Favourites</h1>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourites">
      <h1>My Favourites</h1>
      <div className="empty-state">
        <h3>No Favourites Yet</h3>
        <p>Start adding movies to your favourites by clicking the like button on any movie card!</p>
      </div>
    </div>
  )
}
