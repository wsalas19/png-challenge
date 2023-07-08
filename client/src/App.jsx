import Movies from "./components/MovieCard";
import NewMovie from "./components/NewMovie";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
	/*const array = [
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
	];*/
	const [movies, setMovies] = useState([]);
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const dataFetch = async () => {
			try {
				const { data: response } = await axios.get(
					"http://localhost:3001/movie"
				);
				setMovies(response);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		dataFetch();
	}, [movies]);

	const addMovie = async (data) => {
		let response = await axios.post("http://localhost:3001/movie", data);
		setMovies([response.data, ...movies]);
	};
	const deleteMovie = async (id) => {
		await axios.delete(`http://localhost:3001/movie/${id}`);
		setMovies(movies.filter((m) => m.id !== id));
	};
	const updateMovie = async (data) => {
		const originalMovie = movies.find((m) => m.id === data.id);
		try {
			await axios.put(`http://localhost:3001/movie/${data._id}`, data);
			setMovies((prevMovies) =>
				prevMovies.map((m) => (m._id === data._id ? data : m))
			);
		} catch (error) {
			console.log(error);

			setMovies((prevMovies) =>
				prevMovies.map((m) => (m._id === data._id ? originalMovie : m))
			);
		}
	};

	return (
		<>
			<header className=" flex justify-center p-5">
				<h1 className="font-bold text-blue-700 text-2xl">
					Royal Films Dashboard
				</h1>
				<button onClick={() => setShow(true)} className=" btn-primary ml-24   ">
					Nueva Pelicula
				</button>
			</header>

			<div className="flex flex-col justify-center items-center w-full gap-3">
				{loading ? (
					<h1 className="text-blue-500 font-bold">Loading...</h1>
				) : (
					<Movies
						movies={movies}
						deleteMovie={deleteMovie}
						updateMovie={updateMovie}
					/>
				)}
			</div>
			<NewMovie
				show={show}
				onClose={() => setShow(false)}
				addMovie={addMovie}
			/>
		</>
	);
}

export default App;
