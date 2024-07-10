// routes/movies.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Add a new movie
router.post('/', async (req, res) => {
    const { name, description, runningTime, thumbnail } = req.body;
    try {
        const newMovie = new Movie({ name, description, runningTime, thumbnail });
        const movie = await newMovie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Movie removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Mark/Unmark movie as favorite
router.put('/favorite/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        movie.favorites = !movie.favorites;
        await movie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;