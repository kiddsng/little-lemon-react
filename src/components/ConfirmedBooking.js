import Nav from "./Nav";
import ShortDescription from "./ShortDescription";

const ConfirmedBooking = () => {
    const subheading = "Reserve a Table";
    const text = "Your booking has been confirmed";

    return (
        <div>
            <Nav />
            <header>
                <section className="header-info">
                    <h1>Little Lemon</h1>
                    <ShortDescription subheading={subheading} text={text} />
                </section>
            </header>
        </div>
    )
}

export default ConfirmedBooking;