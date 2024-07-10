// models/Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    runningTime: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    favorites: { type: Boolean, default: false }
});

module.exports = mongoose.model('Movie', MovieSchema);

// models/Comment.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    user: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
