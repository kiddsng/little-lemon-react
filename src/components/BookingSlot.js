const BookingSlot = (props) => {
    return (
        <option value={props.availableTime}>{props.availableTime}</option>
    );
};

export default BookingSlot;