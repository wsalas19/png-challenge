var express = require("express");
const movie = require("../models/movie");

var router = express.Router();
//helper
function capitalize(val) {
	if (typeof val !== "string") val = "";
	return val.charAt(0).toUpperCase() + val.substring(1);
}

//get all movies
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

//add a movie to db
router.post("/", async (req, res) => {
	const duplicate = await movie.findOne({ title: req.body.title });

	if (duplicate) {
		return res
			.status(400)
			.send({ message: "This Movie already exists in our records" });
	}

	try {
		const newmovie = new movie(req.body);

		// Save the movie to the database
		const savedMovie = await newmovie.save();

		return res.status(201).json(savedMovie);
	} catch (error) {
		return res.status(400).send({ message: error.message });
	}
});

//update movie info
router.put("/:id", async (req, res) => {
	const { id } = req.params;
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
		let response = await movie.updateOne(
			{ _id: id },
			{
				$set: {
					title,
					language,
					classification,
					duration,
					releaseDate,
					trailerUrl,
					synopsis,
					director,
					cast,
				},
			}
		);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

//remove a movie
router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		let response = await movie.findByIdAndDelete(id);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;
