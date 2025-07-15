import { useParams, Link } from "react-router-dom"
import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import movies from "./data/movies.js"

function ShowMovie() {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const addToWishlist = () => {
    movie.saved = true
    enqueueSnackbar(`"${movie.name}" added to your wishlist`, { variant: 'success'})
    navigate("/")
  }

  if (!movie) {
   return <p>Movie not found.</p>
  }

  return (
    <>
      <Header pageTitle={""}/>
        <div className="movie-details">
          <h1>{movie.name}</h1>
          <img src={`/src/assets/${id}.jpg`} height="70%"/>
          <p>⏱ {movie.duration} mins</p>
          <p>⭐ {movie.rating}</p>
          <Link to={`/movies/rent/${id}`}>
            <button>Rent</button>
          </Link>
          <Link to={`/movies/buy/${id}`}>
            <button>Buy</button>
          </Link>
          <button onClick={addToWishlist}>Add to wishlist</button>
        </div>
      <Footer/>
    </>
  );
}

export default ShowMovie;