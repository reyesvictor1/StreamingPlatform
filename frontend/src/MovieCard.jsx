import { Link } from "react-router-dom"

function MovieCard({ id, name, duration, rating }) {

  return (
    <Link to={`/movies/details/${id}`} className="movie-card">
      <div>
        <h3>{name}</h3>
        <div className="movie-image">
          <img src={`/src/assets/${id}.jpg`} alt={name} />
        </div>
        <p>⏱ {duration} mins</p>
        <p>⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;


