function MovieCard({
	image,
	title,
	language,
	classification,
	duration,
	releaseDate,
	trailerUrl,
	synopsis,
	director,
	cast,
}) {
	return (
		<>
			<div className=" bg-slate-100 w-[50%] flex flex-row rounded-lg">
				<a href={image}>
					<img
						src={image}
						alt="movie-poster"
						className=" aspect-auto w-24 p-2"
					/>
				</a>
				<div className=" flex flex-col gap-2 p-3">
					<div className=" flex flex-row gap-2">
						<h1 className="font-bold text-lg justify-between">{title}</h1>
						<p>{language}</p>
					</div>
					<div className=" flex flex-row gap-2">
						<p>{duration}</p>
						<p>{releaseDate}</p>
						<p>{classification}</p>
					</div>
					<div className=" flex flex-row gap-2">
						<p className=" font-thin">{synopsis}</p>
					</div>
					<div className=" flex flex-row gap-2">
						<p className=" font-semibold">Director: </p>
						<p>{director}</p>
						<p className=" font-semibold">Cast:</p>
						{cast.map((c) => {
							return <p key={c}>{c}</p>;
						})}
						<a href={trailerUrl} className="pl-3 text-blue-400 underline">
							Trailer
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

function Movies({ movies }) {
	return (
		<>
			{movies.map((movie, index) => (
				<MovieCard
					key={index}
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
				/>
			))}
		</>
	);
}

export default Movies;
