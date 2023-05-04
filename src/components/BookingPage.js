import Nav from "./Nav";
import ShortDescription from "./ShortDescription";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    const subheading = "Reserve a Table";
    const text = "Fill in the details below";

    return (
        <div>
            <Nav />
            <header>
                <section className="header-info">
                    <h1>Little Lemon</h1>
                    <ShortDescription subheading={subheading} text={text} />
                </section>
            </header>
            <BookingForm times={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default BookingPage;