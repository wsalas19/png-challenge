import MovieCard from "./components/MovieCard";

function App() {
	return (
		<>
			<header className=" flex justify-center p-5">
				<h1 className="font-bold text-blue-700 text-2xl">
					Royal Films Dashboard
				</h1>
				<button className=" bg-blue-700 text-white rounded-md px-4 ml-24  font-extrabold hover:bg-blue-400 transition ">
					Nueva Pelicula
				</button>
			</header>

			<div className="flex flex-col justify-center items-center w-full gap-3">
				<MovieCard
					title={"Barbie"}
					director={"Greta Gerwig"}
					cast={["Margot Robbie", "Kingsley Ben-Adir", "Ryan Gosling"]}
					releaseDate={"21 de julio de 2023"}
					synopsis={
						"Barbie suffers a crisis that leads her to question her world and her existence."
					}
					classification={"PG-13"}
					duration={"1h 54min"}
					language={"EN"}
					trailerUrl={
						"https://www.imdb.com/video/vi945734681/?playlistId=tt1517268&ref_=tt_ov_vi"
					}
					image={
						"https://m.media-amazon.com/images/M/MV5BMjFlMDA2ZmUtYjE2OC00ZmYzLTg3MDYtODY4MGU3NzRhMzNhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg"
					}
				/>
				<MovieCard
					title={"Barbie"}
					director={"Greta Gerwig"}
					cast={["Margot Robbie", "Kingsley Ben-Adir", "Ryan Gosling"]}
					releaseDate={"21 de julio de 2023"}
					synopsis={
						"Barbie suffers a crisis that leads her to question her world and her existence."
					}
					classification={"PG-13"}
					duration={"1h 54min"}
					language={"EN"}
					trailerUrl={
						"https://www.imdb.com/video/vi945734681/?playlistId=tt1517268&ref_=tt_ov_vi"
					}
					image={
						"https://m.media-amazon.com/images/M/MV5BMjFlMDA2ZmUtYjE2OC00ZmYzLTg3MDYtODY4MGU3NzRhMzNhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg"
					}
				/>
			</div>
		</>
	);
}

export default App;
