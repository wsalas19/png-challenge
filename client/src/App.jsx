import Movies from "./components/MovieCard";
import NewMovie from "./components/NewMovie";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
	const [movies, setMovies] = useState([]);
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [filter, setFilter] = useState("");

	//fetch data and consume
	useEffect(() => {
		const dataFetch = async () => {
			try {
				const { data: response } = await axios.get(
					"http://localhost:3001/movie"
				);
				setMovies(response);
				setLoading(false);
			} catch (error) {
				setError(error.response.data.message);
				setLoading(false);
			}
		};
		dataFetch();
	}, [movies]);

	//drilled methods to modify global data
	//create request
	const addMovie = async (data) => {
		try {
			let response = await axios.post("http://localhost:3001/movie", data);
			setMovies([response.data, ...movies]);
		} catch (error) {
			console.log(error);
			setError(error.response.data.message);
		}
	};

	//delete request
	const deleteMovie = async (id) => {
		await axios.delete(`http://localhost:3001/movie/${id}`);
		setMovies(movies.filter((m) => m.id !== id));
	};

	//update request
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

	const filteredMovies = filter
		? movies.filter((movie) => movie.classification === filter)
		: movies;

	return (
		<>
			<header className=" flex justify-center p-5 gap-3">
				<h1 className="font-bold text-blue-700 text-2xl">
					Royal Films Dashboard
				</h1>
				<button onClick={() => setShow(true)} className=" btn-primary ml-24   ">
					Nueva Pelicula
				</button>
				<select
					className=" btn-primary flex text-center cursor-pointer"
					id="classification"
					name="classification"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					required
				>
					<option value="">All</option>
					<option value="G">G</option>
					<option value="PG">PG</option>
					<option value="PG-13">PG-13</option>
					<option value="R">R</option>
					<option value="NC-17">NC-17</option>
				</select>
			</header>

			<div className="flex flex-col justify-center items-center w-full gap-3">
				{loading ? (
					<h1 className="text-blue-500 font-bold">Loading...</h1>
				) : (
					<Movies
						movies={filteredMovies}
						deleteMovie={deleteMovie}
						updateMovie={updateMovie}
					/>
				)}
			</div>
			{error && (
				<div
					onClick={() => setError("")}
					className=" fixed bottom-0 right-0 bg-red-500 text-white p-4 rounded-md m-5"
				>
					{error}
				</div>
			)}
			<NewMovie
				show={show}
				onClose={() => setShow(false)}
				addMovie={addMovie}
			/>
		</>
	);
}

export default App;
