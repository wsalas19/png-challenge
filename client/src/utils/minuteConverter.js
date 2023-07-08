export const minuteConverter = (minutes) => {
	if (minutes < 60) {
		return `${minutes} min`;
	}

	if (minutes === 60) {
		return "1h";
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return `${hours}h ${remainingMinutes}min`;
};
