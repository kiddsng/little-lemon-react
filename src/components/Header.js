const Header = () => {
    return (
        <header className="Header">
            <div className="Header-info-section">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className="Header-image-section">
                <img className="Header-image" src={require("../assets/restaurant_food.jpg")} alt="Little Lemon restaurant" />
            </div>
        </header>
    );
};

export default Header;