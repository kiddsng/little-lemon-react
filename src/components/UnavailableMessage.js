const UnavailableMessage = (props) => {
    return (
        <p className="message">These timings are unavailable: {props.times}.</p>
    )
}

export default UnavailableMessage;