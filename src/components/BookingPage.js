import Nav from "./Nav";
import ShortDescription from "./ShortDescription";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    const subheading = "Reserve a Table";
    const text = "Fill in the details below";

    return (
        <>
            <Nav />
            <header>
                <div className="header-info">
                    <h1>Little Lemon</h1>
                    <ShortDescription subheading={subheading} text={text} />
                </div>
            </header>
            <BookingForm times={props.state} dispatch={props.dispatch} submitForm={props.submitForm} />
        </>
    )
}

export default BookingPage;