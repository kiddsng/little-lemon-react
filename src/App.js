import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

// Function to handle the state change for availableTimes
export const updateTimes = (state, action) => {
  switch (action.type) {
    // When user selects a time
    case "select": {
      return {
        ...state,
        selectedTime: action.time
      }
    }
    // When user clicks on the submit reservation button (push action.time to bookedTimes -> remove action.time from availableTimes -> reset selectedTime)
    case "reserve": {
      return {
        ...state,
        bookedTimes: [
          ...state.bookedTimes,
          action.time
        ],
        availableTimes: state.availableTimes.filter((t) => t !== action.time),
        selectedTime: state.availableTimes[0]
      }
    }
    default: {
      return new Error("Unknown action type: ", action.type);
    }
  }
};

// Function to create the initial state for times (includes availableTimes)
export const initializeTimes = () => {
  return {
    selectedTime: "11:00",
    availableTimes: [
      "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
    ],
    bookedTimes: []
  };
};

function App() {
  const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage state={state} dispatch={dispatch} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
