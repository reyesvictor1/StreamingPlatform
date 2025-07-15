import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import movies from "./data/movies.js"
import useMovieAccess from "./hooks/useMovieAccess.js"

function BuyMovie() {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const { buyMovie } = useMovieAccess(movie.id)

  const saveBuy = () => {
    buyMovie()
    enqueueSnackbar(`Successfully bought "${movie.name}"`, { variant: 'success'})
    navigate("/")
  }

  if (!movie) {
   return <p>Movie not found.</p>
  }

  return(
    <>
      <Header pageTitle={"Buy"}/>
      <main>
        <h2>{movie.name}</h2>
        <img src={`/assets/${id}.jpg`} height="50%"/>
        <p className="buy-rent-info">Buy for ${movie.price}</p>
        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
        <button onClick={saveBuy}>Accept</button>
      </main>
      <Footer/>
    </>
  );
}

export default BuyMovie;