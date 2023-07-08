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

module.exports = router;
