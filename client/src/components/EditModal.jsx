function EditModal({ show, onClose, movie }) {
	if (show === false) {
		return null;
	}

	return (
		<div className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 flex justify-center items-center">
			<div className=" w-[25%] bg-white p-4 rounded-md">
				<h1 className="text-blue-500 font-bold">Edit {movie.title}</h1>
				<button onClick={onClose} className="btn-primary w-full">
					Close
				</button>
			</div>
		</div>
	);
}

export default EditModal;
