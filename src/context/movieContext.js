import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('/api/movies');
            setMovies(res.data);
        };
        const fetchMoviesFromTMDb = async () => {
            try {
                const apiKey = '5b5386e559a4dfbd3dd1fbe346ca76d1'; 
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies from TMDb:', error);
            }
        };
        fetchMovies();
          fetchMoviesFromTMDb();
    }, []);

    const addMovie = async (movie) => {
        const res = await axios.post('/api/movies', movie);
        setMovies([res.data, ...movies]);
    };

    const deleteMovie = async (id) => {
        await axios.delete(`/api/movies/${id}`);
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleFavorite = (id) => {
        setMovies(movies.map(movie => {
            if (movie.id === id) {
                return { ...movie, favorites: !movie.favorites };
            }
            return movie;
        }));
        setFavorites(prevFavorites =>
            prevFavorites.some(movie => movie.id === id)
                ? prevFavorites.filter(movie => movie.id !== id)
                : [...prevFavorites, movies.find(movie => movie.id === id)]
        );
    };

    return (
        <MovieContext.Provider value={{
            movies,
            favorites,
            selectedMovie,
            setSelectedMovie,
            addMovie,
            deleteMovie,
            toggleFavorite
        }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;
