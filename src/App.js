import "@fontsource/markazi-text/400.css";
import "@fontsource/karla/500.css";

import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

import { initializeTimes, fetchAPI, submitAPI } from "./utils";

const theme = extendTheme({
	fonts: {
		heading: `"Markazi Text", sans-serif`,
		body: `"Karla", sans-serif`,
	},
});

// Function to handle the state change for availableTimes
export const updateTimes = (state, action) => {
	switch (action.type) {
		// When user selects a date (checks for bookedTimes)
		case "select-date": {
			let selectedDateBookedTimes = [];
			state.bookedTimes.forEach((bookedTime) => {
				if (bookedTime.date === action.date) {
					selectedDateBookedTimes.push(bookedTime.time);
				}
			});

			return {
				...state,
				availableTimes: fetchAPI(action.date).filter(
					(t) => !selectedDateBookedTimes.includes(t)
				),
				selectedTime: state.availableTimes[0],
			};
		}
		// When user selects a time
		case "select-time": {
			return {
				...state,
				selectedTime: action.time,
			};
		}
		// When user clicks on the submit reservation button (push action.time to bookedTimes -> remove action.time from availableTimes -> reset selectedTime)
		case "reserve": {
			return {
				...state,
				bookedTimes: [
					...state.bookedTimes,
					{
						date: action.date,
						time: action.time,
					},
				],
				availableTimes: state.availableTimes.filter((t) => t !== action.time),
				selectedTime: state.availableTimes[0],
			};
		}
		default: {
			return new Error("Unknown action type: ", action.type);
		}
	}
};

function App() {
	// initialize times state and dispatch function
	const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

	// Function to navigate to "./confirmedbooking" upon submitting the booking form
	const navigate = useNavigate();
	const submitForm = (formData) => {
		if (submitAPI(formData)) {
			navigate("/confirmedbooking");
		}
	};

	return (
		<ChakraProvider theme={theme}>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route
						path="/booking"
						element={
							<BookingPage
								state={state}
								dispatch={dispatch}
								submitForm={submitForm}
							/>
						}
					></Route>
					<Route
						path="/confirmedbooking"
						element={<ConfirmedBooking />}
					></Route>
				</Routes>
			</div>
		</ChakraProvider>
	);
}

export default App;
