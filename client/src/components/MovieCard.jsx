import { useState } from "react";
import EditModal from "./EditModal";

function MovieCard({
	title,
	language,
	classification,
	duration,
	releaseDate,
	trailerUrl,
	synopsis,
	director,
	cast,
	handleRemove,
	onShow,
}) {
	return (
		<>
			<div className=" bg-slate-100 w-[30%] flex flex-row rounded-lg">
				{/*<a href={image}>
					<img
						src={image}
						alt="movie-poster"
						className=" aspect-auto w-24 p-2"
					/>
	</a>*/}
				<div className=" flex flex-col gap-2 p-3">
					<div className=" flex flex-row gap-2">
						<h1 className="font-bold text-lg justify-between">{title}</h1>
						<p>{language}</p>
						<a href={trailerUrl} className="pl-3 text-blue-400 underline">
							Trailer
						</a>
					</div>
					<div className=" flex flex-row gap-2">
						<p>{duration}</p>
						<p>{releaseDate}</p>
						<p>{classification}</p>
					</div>
					<div className=" flex flex-row gap-2">
						<p className=" font-thin">{synopsis}</p>
					</div>
					<div className=" flex flex-row gap-2 justify-between">
						<div className="flex gap-2">
							<p className=" font-semibold">Director: </p>
							<p>{director}</p>
							<p className=" font-semibold">Cast:</p>
							{cast.map((c, index) => {
								return <p key={index}>{c}</p>;
							})}
						</div>
					</div>
					<div className="flex  gap-3">
						<button onClick={onShow} className=" text-blue-500 underline">
							Edit
						</button>
						<button onClick={handleRemove} className="text-red-500 underline">
							Remove
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

function Movies({ movies, deleteMovie, updateMovie }) {
	const [show, setShow] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);
	if (movies.length === 0) {
		return (
			<div className="flex justify-center">
				<h1 className=" text-gray-500">0 Movies added.</h1>
			</div>
		);
	}

	const handleEdit = (movie) => {
		setSelectedMovie(movie); // Set the selected movie when edit button is clicked
		setShow(true); // Show the edit modal
	};

	return (
		<>
			{movies.map((movie) => (
				<MovieCard
					onShow={() => handleEdit(movie)}
					key={movie._id}
					title={movie.title}
					director={movie.director}
					cast={movie.cast}
					releaseDate={movie.releaseDate}
					synopsis={movie.synopsis}
					classification={movie.classification}
					duration={movie.duration}
					language={movie.language}
					trailerUrl={movie.trailerUrl}
					image={movie.image}
					handleRemove={() => deleteMovie(movie._id)}
				/>
			))}

			{selectedMovie && (
				<EditModal
					show={show}
					onClose={() => {
						setShow(false);
						setSelectedMovie(null); // Reset the selected movie when the modal is closed
					}}
					updateMovie={updateMovie}
					movie={selectedMovie} // Pass the selected movie as a prop
				/>
			)}
		</>
	);
}

export default Movies;
