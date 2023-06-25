const BookingSlot = ({ availableTime }) => {
    return (
        <option value={availableTime}>{availableTime}</option>
    );
};

export default BookingSlot;