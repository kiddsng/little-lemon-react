// Function to create the initial state for times (includes availableTimes) using fetchAPI
export const initializeTimes = () => {
	const data = fetchAPI(new Date());

	return {
		selectedTime: data[0],
		availableTimes: data,
		bookedTimes: [],
	};
};

// Function to generate unavailable timeings based on selected date
export const generateUnavailableTimes = (date, bookedTimes) => {
	let unavailableTimes = [];

	// check for the selected date in bookedTimes
	for (var i = 0; i < bookedTimes.length; i++) {
		if (bookedTimes[i].date === date) {
			unavailableTimes.push(bookedTimes[i].time);
		}
	}
	return unavailableTimes.join(", ");
};

// API functions from https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js
const seededRandom = function (seed) {
	var m = 2 ** 35 - 31;
	var a = 185852;
	var s = seed % m;
	return function () {
		return (s = (s * a) % m) / m;
	};
};

export const fetchAPI = function (date) {
	let result = [];
	let random = seededRandom(date.getDate());

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) {
			result.push(i + ":00");
		}
		if (random() < 0.5) {
			result.push(i + ":30");
		}
	}
	return result;
};

export const submitAPI = function (formData) {
	return true;
};
