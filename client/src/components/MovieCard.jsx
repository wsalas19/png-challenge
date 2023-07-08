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
				<img src={image} alt="movie-poster" className=" aspect-auto w-28 p-2" />
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

export default MovieCard;
