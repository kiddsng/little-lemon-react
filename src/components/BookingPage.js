import { useReducer } from "react";

import Nav from "./Nav";
import ShortDescription from "./ShortDescription";
import BookingForm from "./BookingForm";

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

// Function to create the initial state for availableTimes
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

const BookingPage = () => {
    const subheading = "Reserve a Table";
    const text = "Fill in the details below";

    const initialTimes = initializeTimes();
    const [state, dispatch] = useReducer(updateTimes, initialTimes);

    return (
        <div>
            <Nav />
            <header>
                <section className="header-info">
                    <h1>Little Lemon</h1>
                    <ShortDescription subheading={subheading} text={text} />
                </section>
            </header>
            <BookingForm times={state} dispatch={dispatch}/>
        </div>
    )
}

export default BookingPage;