import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/movieContext';
import MovieCard from './MovieCard';

const Home = () => {
    const { movies, setSelectedMovie } = useContext(MovieContext);

    return (
        <div className="home">
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id} onClick={() => setSelectedMovie(movie)}>
                    <MovieCard movie={movie} />
                </Link>
            ))}
        </div>
    );
};

export default Home;
