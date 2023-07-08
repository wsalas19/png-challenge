function NewMovie({ show }) {
	if (show === false) {
		return null;
	}

	return (
		<>
			<div>
				<h1>Modal</h1>
				<button>close</button>
			</div>
		</>
	);
}

export default NewMovie;
