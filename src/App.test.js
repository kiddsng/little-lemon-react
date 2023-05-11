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
    expect(state.availableTimes).not.toBeNull();
});

test("Using the updateTimes function", () => {
    const state = initializeTimes();
    const times = updateTimes(state, { type: "select-date", date: new Date("2023-05-14") })
    expect(times.availableTimes).not.toBeNull();
});
