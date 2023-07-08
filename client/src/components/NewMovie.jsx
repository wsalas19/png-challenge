import { useState } from "react";

function NewMovie({ show, onCLose /*onSubmit*/ }) {
	const [formData, setFormData] = useState({
		title: "",
		language: "",
		classification: "",
		duration: "",
		releaseDate: "",
		trailerUrl: "",
		synopsis: "",
		director: "",
		cast: [],
	});

	if (show === false) {
		return null;
	}

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === "cast") {
			// Convert the comma-separated string value to an array
			const castArray = value.split(",");
			setFormData((prevData) => ({
				...prevData,
				cast: castArray,
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormData({
			title: "",
			language: "",
			classification: "",
			duration: "",
			releaseDate: "",
			trailerUrl: "",
			synopsis: "",
			director: "",
			cast: [],
		});
		onCLose();
	};

	return (
		<>
			<div className=" fixed left-0 right-0 top-0 bottom-0 bg-black/50 flex justify-center items-center gap-2 ">
				<div className=" w-[25%] bg-white p-4 rounded-md">
					<h1 className="text-blue-500 font-bold">New Movie</h1>
					<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
						{/* Title */}
						<label htmlFor="title">Title:</label>
						<input
							name="title"
							type="text"
							id="title"
							value={formData.title}
							onChange={handleChange}
							required
						/>

						{/* Language */}
						<label htmlFor="language">Language:</label>
						<input
							name="language"
							type="text"
							id="language"
							value={formData.language}
							onChange={handleChange}
							required
						/>

						{/* Classification */}
						<label htmlFor="classification">Classification:</label>
						<select
							id="classification"
							name="classification"
							value={formData.classification}
							onChange={handleChange}
							required
						>
							<option value="">Select Classification</option>
							<option value="G">G</option>
							<option value="PG">PG</option>
							<option value="PG-13">PG-13</option>
							<option value="R">R</option>
							<option value="NC-17">NC-17</option>
						</select>

						{/* Duration */}
						<label htmlFor="duration">Duration (min):</label>
						<input
							name="duration"
							type="number"
							id="duration"
							value={formData.duration}
							onChange={handleChange}
							required
						/>

						{/* Release Date */}
						<label htmlFor="releaseDate">Release Date:</label>
						<input
							name="releaseDate"
							type="date"
							id="releaseDate"
							value={formData.releaseDate}
							onChange={handleChange}
							required
						/>

						{/* Trailer URL */}
						<label htmlFor="trailerUrl">Trailer URL:</label>
						<input
							name="trailerUrl"
							type="url"
							id="trailerUrl"
							value={formData.trailerUrl}
							onChange={handleChange}
							required
						/>

						{/* Synopsis */}
						<label htmlFor="synopsis">Synopsis:</label>
						<textarea
							name="synopsis"
							id="synopsis"
							value={formData.synopsis}
							onChange={handleChange}
							required
						/>

						{/* Director */}
						<label htmlFor="director">Director:</label>
						<input
							name="director"
							type="text"
							id="director"
							value={formData.director}
							onChange={handleChange}
							required
						/>

						{/* Cast */}
						<label htmlFor="cast">Cast:</label>
						<input
							name="cast"
							type="text"
							id="cast"
							value={formData.cast.join(",")}
							onChange={handleChange}
							required
						/>

						{/* Submit button */}
						<button className="btn-primary my-2" type="submit">
							Add Movie
						</button>
					</form>
					<button onClick={onCLose} className="btn-primary w-full">
						Close
					</button>
				</div>
			</div>
		</>
	);
}

export default NewMovie;
