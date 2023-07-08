const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const moviesRoute = require("./src/routes/moviesRoute");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use("/movie", moviesRoute);

//db connect
mongoose.set("strictQuery", true);
mongoose
	.connect("mongodb+srv://wsalas19:wsalas19@png-rf.5pr7p2q.mongodb.net/") //CHANGE
	.then(() => console.log("Connected to DB!"))
	.catch((e) => console.log(e.message));

app.get("/", (req, res) => {
	res.status(200).send({ text: "Welcome to my API" });
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
