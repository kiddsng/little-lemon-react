import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";


test("Rendering the BookingForm heading", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);
    const headingElement = screen.getByText(/1. Table reservation/);
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

test("Validating the HTML5 validation is applied", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);

    const firstNameInput = screen.getByLabelText(/First name/);
    const emailInput = screen.getByLabelText(/Email/);
    const dateInput = screen.getByLabelText(/Date/);

    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(dateInput).toHaveAttribute("type", "date");
});

test("Submit reservation button should be disabled if the form is invalid", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);

    const firstNameInput = screen.getByLabelText(/First name/);
    fireEvent.change(firstNameInput, { target: { value: "" } });

    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "2022-05-11" } });

    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);
    expect(submitForm).not.toHaveBeenCalled();
});

// test("Submit reservation button should not be disabled if the form is valid", () => {
//     const state = initializeTimes();
//     const dispatch = jest.fn();
//     const submitForm = jest.fn();
//     render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);

//     const firstNameInput = screen.getByLabelText(/First name/);
//     fireEvent.change(firstNameInput, { target: { value: "John" } });

//     const emailInput = screen.getByLabelText(/Email/);
//     fireEvent.change(emailInput, { target: { value: "john@gmail.com" } });

//     const dateInput = screen.getByLabelText(/Date/);
//     fireEvent.change(dateInput, { target: { value: "2030-05-13" } });

//     const timeInput = screen.getByLabelText(/Time/);
//     fireEvent.change(timeInput, { target: { value: "17:00" } });

//     const occasionInput = screen.getByLabelText(/Occasion/);
//     fireEvent.change(occasionInput, { target: { value: "None" } });

//     const seatingInput = screen.getByLabelText(/Seating/);
//     fireEvent.change(seatingInput, { target: { value: "Indoor" } });

//     const submitBtn = screen.getByRole("button");
//     fireEvent.click(submitBtn);
//     expect(submitForm).toHaveBeenCalled();
// });