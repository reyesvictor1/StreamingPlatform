import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MovieCard from "./MovieCard"
import { useEffect } from "react"

import movies from "./data/movies.js"

function Wishlist() {
  const filteredMovies = movies.filter((movie) => movie.saved)

  useEffect(() => {
    document.title = `Wishlist (${filteredMovies.length} movies)`
  }, [filteredMovies.length])

  return(
    <>
      <Header pageTitle={"My Wishlist"}/>
      <main className="home-content">
        {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            duration={movie.duration}
            rating={movie.rating}
            saved={movie.saved}
          />
        ))
        ) : (
          <p>No movies found.</p>
        )}
      </main>
      <Footer/>
    </>
  );
}

export default Wishlist;