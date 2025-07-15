import { Link } from "react-router-dom"

function HomeHeader({ searchTerm, onSearchChange }) {
    return(
        <header>
            <h1 id="website-title">VICFLIX</h1>
            <input
                className="searchbar"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <Link to="/movies/my-movies">
                <button>My Movies</button>
            </Link>
            <Link to="/movies/wishlist">
                <button>My Wishlist</button>
            </Link>
        </header>
    );
}

export default HomeHeader;
