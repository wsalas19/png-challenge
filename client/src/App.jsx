import Movies from "./components/MovieCard";

function App() {
	const array = [
		{
			title: "Barbie",
			director: "Greta Gerwig",
			cast: ["Margot Robbie", "Kingsley Ben-Adir", "Ryan Gosling"],
			releaseDate: "July 21 2023",
			synopsis:
				"Barbie suffers a crisis that leads her to question her world and her existence.",
			classification: "PG-13",
			duration: "1h 54min",
			language: "English",
			trailerUrl:
				"https://www.imdb.com/video/vi945734681/?playlistId=tt1517268&ref_=tt_ov_vi",
			image:
				"https://m.media-amazon.com/images/M/MV5BMjFlMDA2ZmUtYjE2OC00ZmYzLTg3MDYtODY4MGU3NzRhMzNhXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
		},
		{
			title: "The Shawshank Redemption",
			director: "Frank Darabont",
			cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
			releaseDate: "14 October 1994",
			synopsis:
				"Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
			classification: "R",
			duration: "2h 22min",
			language: "English",
			trailerUrl: "https://www.imdb.com/video/vi3877612057/",
			image:
				"https://m.media-amazon.com/images/M/MV5BMDFkYTcwZWQtZDMwZC00OTgwLTgwODQtN2FjYTYwNjBlNTkwXkEyXkFqcGdeQXVyMTI4NTA1Nzgw._V1_.jpg",
		},
		{
			title: "The Godfather",
			director: "Francis Ford Coppola",
			cast: ["Marlon Brando", "Al Pacino", "James Caan"],
			releaseDate: "24 March 1972",
			synopsis:
				"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			classification: "R",
			duration: "2h 55min",
			language: "English",
			trailerUrl: "https://www.imdb.com/video/vi3877612057/",
			image:
				"https://m.media-amazon.com/images/M/MV5BM2MyNjQ3NzAtMmFkYS00MTM1LTkxZTAtNTk3MDQ4MTZkNzFiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
		},
	];

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
				<Movies movies={array} />
			</div>
		</>
	);
}

export default App;
