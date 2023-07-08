const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	classification: {
		type: String,
		enum: ["G", "PG", "PG-13", "R", "NC-17"],
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	releaseDate: {
		type: String,
		required: true,
	},
	trailerUrl: {
		type: String,
		required: true,
	},
	synopsis: {
		type: String,
		required: true,
	},
	director: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	cast: {
		type: [String],
		required: true,
	},
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
