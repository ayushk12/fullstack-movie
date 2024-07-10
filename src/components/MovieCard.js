import React, { useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const MovieCard = ({ movie }) => {
    const { toggleFavorite } = useContext(MovieContext);

    return (
        <div className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            <h5>Popularity: {movie.popularity}</h5>
            <h5>Rating: {movie.vote_average}</h5>
            <button onClick={() => toggleFavorite(movie.id)}>
                {movie.favorites ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
    );
};

export default MovieCard;
