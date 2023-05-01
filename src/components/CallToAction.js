import { Link } from "react-router-dom";
import ShortDescription from "./ShortDescription";

const CallToAction = () => {
    const location = "Chicago";
    const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."

    return (
        <header>
            <section className="header-info">
                <h1>Little Lemon</h1>
                <ShortDescription location={location} description={description} />
                <button className="button"><Link to="/booking" className="reserve-text">Reserve a Table</Link></button>
            </section>
            <section className="header-image">
                <img src={require("../assets/restaurant_food.jpg")} alt="Little Lemon restaurant" />
            </section>
        </header>
    );
};

export default CallToAction;