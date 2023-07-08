var express = require("express");
const movie = require("../models/movie");

var router = express.Router();

router.get("/", async function (req, res) {
	const { id } = req.query;
	if (id) {
		try {
			if (id) {
				let response = await movie.findById(id);
				res.status(200).send(response);
			}
		} catch (error) {
			res.status(400).send({ error: error.message });
		}
	}

	try {
		let response = await movie.find();
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

router.post("/", async (req, res) => {
	const {
		title,
		language,
		classification,
		duration,
		releaseDate,
		trailerUrl,
		synopsis,
		director,
		cast,
	} = req.body;

	try {
		const newmovie = new movie(req.body);

		// Save the movie to the database
		const savedMovie = await newmovie.save();

		res.status(201).json(savedMovie);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
});

module.exports = router;
