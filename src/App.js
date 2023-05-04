import './App.css';

import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

// Function to handle the state change for availableTimes
const updateTimes = (state, action) => {
  switch (action.type) {
      // When user selects a time
      case "select": {
          return {
              ...state,
              selectedTime: action.time
          };
      }
      // When user clicks on the submit reservation button
      case "reserve": {
          state.bookedTimes.push(action.time);
          state.availableTimes.splice(state.availableTimes.indexOf(action.time), 1);

          return {
              ...state,
              selectedTime: state.availableTimes[0],
          }
      }
      default: {
          return new Error();
      }
  };
};

// Function to create the initial state for times (includes availableTimes)
const initializeTimes = () => {
  let times = {
      selectedTime: "11:00",
      availableTimes: [
          "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
      ],
      bookedTimes: []
  };

  return times;
}

function App() {
  const initialTimes = initializeTimes();
  const [state, dispatch] = useReducer(updateTimes, initialTimes);

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
