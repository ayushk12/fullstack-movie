import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../context/movieContext';
import CommentSection from './CommentSection';

const MovieDetail = () => {
    const { id } = useParams();
    const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchMovie = async () => {
            if (!selectedMovie) {
                const res = await axios.get(`/api/movies/${id}`);
                setSelectedMovie(res.data);
            }
            const resComments = await axios.get(`/api/comments/${id}`);
            setComments(resComments.data);
        };
        fetchMovie();
    }, [id, selectedMovie, setSelectedMovie]);

    const addComment = async () => {
        const res = await axios.post('/api/comments', { movieId: id, user: 'Anonymous', text: comment });
        setComments([...comments, res.data]);
        setComment('');
    };

    return (
        <div className="movie-detail">
            {selectedMovie && (
                <>
                    <h2>{selectedMovie.name}</h2>
                    <p>{selectedMovie.description}</p>
                    <p>Running Time: {selectedMovie.runningTime} minutes</p>
                    <img src={selectedMovie.thumbnail} alt={selectedMovie.name} />
                    <CommentSection comments={comments} setComment={setComment} addComment={addComment} />
                </>
            )}
        </div>
    );
};

export default MovieDetail;
