import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";


test("Rendering the BookingForm heading", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);
    const headingElement = screen.getByText(/Reserve a table form/);
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

    const resNameInput = screen.getByLabelText(/Enter name/);
    const emailInput = screen.getByLabelText(/Enter email/);
    const dateInput = screen.getByLabelText(/Choose date/);
    const noOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const remarksInput = screen.getByLabelText(/Remarks/);

    expect(resNameInput).toHaveAttribute("type", "text");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(noOfGuestsInput).toHaveAttribute("type", "number");
    expect(remarksInput).toHaveAttribute("type", "textarea");
});

test("Submit reservation button should be disabled if the form is invalid", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);

    const resNameInput = screen.getByLabelText(/Enter name/);
    fireEvent.change(resNameInput, { target: { value: "" } });

    const emailInput = screen.getByLabelText(/Enter email/);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: "2022-05-11" } });

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toHaveProperty("disabled", true);

    fireEvent.click(submitBtn);
    expect(submitForm).not.toHaveBeenCalled();
});

test("Submit reservation button should not be disabled if the form is valid", () => {
    const state = initializeTimes();
    const dispatch = jest.fn();
    const submitForm = jest.fn();
    render(<BookingForm times={state} dispatch={dispatch} submitForm={submitForm} />);

    const resNameInput = screen.getByLabelText(/Enter name/);
    fireEvent.change(resNameInput, { target: { value: "John" } });

    const emailInput = screen.getByLabelText(/Enter email/);
    fireEvent.change(emailInput, { target: { value: "john@gmail.com" } });

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, { target: { value: "2030-05-13" } });

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toHaveProperty("disabled", false);

    fireEvent.click(submitBtn);
    expect(submitForm).toHaveBeenCalled();
});