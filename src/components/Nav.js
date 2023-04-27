import logo from "../logo.svg";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <img className="Nav-logo" src={logo} alt="Logo" />
            <ul>
                <li><Link to="/" className="Nav-item">Home</Link></li>
                <li><Link to="/" className="Nav-item">About</Link></li>
                <li><Link to="/" className="Nav-item">Menu</Link></li>
                <li><Link to="/booking" className="Nav-item">Reservations</Link></li>
                <li><Link to="/" className="Nav-item">Order Online</Link></li>
                <li><Link to="/" className="Nav-item">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;