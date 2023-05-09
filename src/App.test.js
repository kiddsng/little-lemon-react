import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
// import BookingPage from "./components/BookingPage";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";

// jest.mock("./App")
// jest.mock("./components/BookingPage");
// jest.mock("./components/BookingForm");

test("Rendering the BookingForm heading", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} />);
    const headingElement = screen.getByText("Reserve a table form");
    expect(headingElement).toBeInTheDocument();
});

test("Initializing the times state using the initializeTimes() function", () => {
    const state = initializeTimes();
    const times = {
        selectedTime: "11:00",
        availableTimes: [
            "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
        ],
        bookedTimes: []
    }
    expect(state).toEqual(times);
});

test("Using the updateTimes function", () => {
    const state = initializeTimes();
    const times = updateTimes(state, { type: "select", time: "13:00" })
    expect(times.selectedTime).toBe("13:00");
});
