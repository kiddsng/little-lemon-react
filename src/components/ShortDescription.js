const ShortDescription = (props) => {
    return (
        <div>
            <h3>{props.location}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ShortDescription