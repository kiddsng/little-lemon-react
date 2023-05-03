const ConfirmationMessage = (props) => {
    return (
        <p className="confirmation">You would like to reserve a table for {props.numOfGuests} on {props.date} {props.time} under the name "{props.resName}".</p>
    )
}

export default ConfirmationMessage;