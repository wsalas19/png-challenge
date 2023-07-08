import { useState } from "react";

function EditModal({ show, onClose, movie, updateMovie }) {
	const [formData, setFormData] = useState({
		_id: movie._id,
		title: movie.title,
		language: movie.language,
		classification: movie.classification,
		duration: movie.duration,
		releaseDate: movie.releaseDate,
		trailerUrl: movie.trailerUrl,
		synopsis: movie.synopsis,
		director: movie.director,
		cast: movie.cast,
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

		updateMovie(formData);

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
		onClose();
	};

	return (
		<div className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 flex justify-center items-center">
			<div className=" w-[25%] bg-white p-4 rounded-md">
				<h1 className="text-blue-500 font-bold">Edit {movie.title}</h1>

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
						onChange={handleChange}
						value={formData.language}
						required
					/>

					{/* Classification */}
					<label htmlFor="classification">Classification:</label>
					<select
						id="classification"
						name="classification"
						onChange={handleChange}
						value={formData.classification}
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
						onChange={handleChange}
						value={formData.duration}
						required
					/>

					{/* Release Date */}
					<label htmlFor="releaseDate">Release Date:</label>
					<input
						name="releaseDate"
						type="date"
						id="releaseDate"
						onChange={handleChange}
						value={formData.releaseDate}
						required
					/>

					{/* Trailer URL */}
					<label htmlFor="trailerUrl">Trailer URL:</label>
					<input
						name="trailerUrl"
						type="url"
						id="trailerUrl"
						onChange={handleChange}
						value={formData.trailerUrl}
						required
					/>

					{/* Synopsis */}
					<label htmlFor="synopsis">Synopsis:</label>
					<textarea
						name="synopsis"
						id="synopsis"
						onChange={handleChange}
						value={formData.synopsis}
						required
					/>

					{/* Director */}
					<label htmlFor="director">Director:</label>
					<input
						name="director"
						type="text"
						id="director"
						onChange={handleChange}
						value={formData.director}
						required
					/>

					{/* Cast */}
					<label htmlFor="cast">Cast:</label>
					<input
						name="cast"
						type="text"
						id="cast"
						onChange={handleChange}
						value={formData.cast.join(",")}
						required
					/>

					{/* Submit button */}
					<button className="btn-primary my-2" type="submit">
						Agregar
					</button>
				</form>
				<button onClick={onClose} className="btn-primary w-full">
					Cerrar
				</button>
			</div>
		</div>
	);
}

export default EditModal;
