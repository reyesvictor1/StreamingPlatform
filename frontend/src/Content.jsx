import MovieCard from "./MovieCard";
import movies from "./data/movies.js"

function Content({ searchTerm }) {
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
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
  );
}

export default Content;
