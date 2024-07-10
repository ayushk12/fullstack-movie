import React, { useContext } from 'react';
import { MovieContext } from '../context/movieContext';
import MovieCard from './MovieCard';

const FavoriteMovies = () => {
    const { favorites } = useContext(MovieContext);

    return (
        <div className="favorites">
            {favorites.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
           
        </div>
    );
};

export default FavoriteMovies;
