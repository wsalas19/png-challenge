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
		enum: ["Todo público", "+12 años", "+14 años", "+16 años", "+18 años"],
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
	releaseDate: {
		type: Date,
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
	cast: {
		type: [String],
		required: true,
	},
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
