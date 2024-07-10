import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/movieContext';

const AdminView = () => {
    const { addMovie, deleteMovie } = useContext(MovieContext);
    const [movie, setMovie] = useState({ name: '', description: '', runningTime: '', thumbnail: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
        setMovie({ name: '', description: '', runningTime: '', thumbnail: '' });
    };

    return (
        <div className="admin-view">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={movie.name} onChange={handleChange} required />
                <input name="description" placeholder="Description" value={movie.description} onChange={handleChange} required />
                <input name="runningTime" placeholder="Running Time" value={movie.runningTime} onChange={handleChange} required />
                <input name="thumbnail" placeholder="Thumbnail URL" value={movie.thumbnail} onChange={handleChange} required />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AdminView;
