import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import MovieCard from "./MovieCard";
import { useEffect } from "react"

import movies from "./data/movies.js"
import movieAccess from "./data/movieAccess.js"

function MyMovies() {
  const moviesWithAccess = movieAccess.filter(
    (movie) => movie.bought === true || movie.remainingDays > 0
  )

  const accessIds = moviesWithAccess.map((movie) => movie.id);

  const filteredMovies = movies.filter((movie) =>
    accessIds.includes(movie.id)
  )

  useEffect(() => {
      document.title = `My Movies (${filteredMovies.length} movies)`
    }, [filteredMovies.length])

  return(
    <>
      <Header pageTitle={"My Movies"}/>
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

export default MyMovies;

