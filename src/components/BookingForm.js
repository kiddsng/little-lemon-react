import { useState } from "react";
import { validateEmail, validateDate } from "../utils";
import ErrorMessage from "./ErrorMessage";
import ConfirmationMessage from "./ConfirmationMessage";

const BookingForm = () => {
    const [resName, setResName] = useState({
        value: "", isTouched: false
    });
    const [email, setEmail] = useState({
        value: "", isTouched: false
    });
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [time, setTime] = useState("11:00");
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [occasion, setOccasion] = useState("None");
    const [remarks, setRemarks] = useState("");

    const getIsFormValid = () => {
        return (
            resName.value.length >= 1 &&
            validateEmail(email.value) &&
            validateDate(date) &&
            time &&
            numOfGuests
        );
    };

    const clearForm = () => {
        setResName({
            value: "", isTouched: false
        });
        setEmail({
            value: "", isTouched: false
        });
        setDate(new Date().toISOString().split("T")[0]);
        setTime("11:00");
        setNumOfGuests(1);
        setOccasion("None");
        setRemarks("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your table is reserved! A confirmation email will be sent to ${email.value}.`)
        clearForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Reserve a table form</h2>
            <div className="field">
                <label htmlFor="res-name">Enter name<sup>*</sup></label>
                <input id="res-name" type="text" placeholder="Name" value={resName.value} onChange={(e) => setResName({...resName, value: e.target.value})} onBlur={() => setResName({...resName, isTouched: true})}/>
                {resName.value.length < 1 && resName.isTouched ? <ErrorMessage errorMessage="Please enter a name." /> : null}
            </div>
            <div className="field">
                <label htmlFor="res-email">Enter email<sup>*</sup></label>
                <input id="res-email" type="email" placeholder="Email" value={email.value} onChange={(e) => setEmail({...email, value: e.target.value})} onBlur={() => setEmail({...email, isTouched: true})}/>
                {!validateEmail(email.value) && email.isTouched ? <ErrorMessage errorMessage="Please enter a proper email." /> : null}
            </div>
            <div className="field">
                <label htmlFor="res-date">Choose date<sup>*</sup></label>
                <input id="res-date" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                {!validateDate(date) ? <ErrorMessage errorMessage="The date selected is unavailable." /> : null}
            </div>
            <div className="field">
                <label htmlFor="res-time">Choose time<sup>*</sup></label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="res-guests">Number of guests<sup>*</sup></label>
                <input id="res-guests" type="number" min="1" max="10"  value={numOfGuests} onChange={(e) => setNumOfGuests(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="res-occasion">Occasion<sup>*</sup></label>
                <select id="res-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="res-remarks">Remarks</label>
                <input id="res-remarks" name="res-remarks" type="textarea" placeholder="Feel free to leave a remark for extra instructions/comments (e.g., Please provide facilities for one wheelchair-bound guest.)" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </div>
            {getIsFormValid() ? <ConfirmationMessage numOfGuests={numOfGuests} date={date} time={time} resName={resName.value} /> : null}
            <button type="submit" className="submit-btn" disabled={!getIsFormValid()}>
                Make your reservation
            </button>
        </form>
    )
}

export default BookingForm;