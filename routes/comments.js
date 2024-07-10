// routes/comments.js
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Add a new comment
router.post('/', async (req, res) => {
    const { movieId, user, text } = req.body;
    try {
        const newComment = new Comment({ movieId, user, text });
        const comment = await newComment.save();
        res.json(comment);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get comments by movie ID
router.get('/:movieId', async (req, res) => {
    try {
        const comments = await Comment.find({ movieId: req.params.movieId });
        res.json(comments);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
    try {
        await Comment.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Comment removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
