import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Vehicle Hub</h2>

            <ul className="nav-links">
                <li><Link to="/">Cars</Link></li>
                <li><Link to="/bike">Bikes</Link></li>
                <li><Link to="/truck">Trucks</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;