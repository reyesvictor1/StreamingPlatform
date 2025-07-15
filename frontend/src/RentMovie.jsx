import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

import movies from "./data/movies.js"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import movieAccess from "./data/movieAccess.js"
import useMovieAccess from "./hooks/useMovieAccess"

function RentMovie() {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === parseInt(id))
  const [days, setDays] = useState(1)
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const { rentMovie } = useMovieAccess(movie.id)

  const saveRent = () => {
    rentMovie(days)
    enqueueSnackbar(`You have rented "${movie.name}" for ${days} days.`, { variant: 'success'})
    navigate("/")
  }

  if (!movie) {
   return <p>Movie not found.</p>
  }

  return(
    <>
      <Header pageTitle={"Rent"}/>
      <main>
        <h2>{movie.name}</h2>
        <img src={`/assets/${id}.jpg`} height="50%"/>
        <p className="buy-rent-info">
          Rent for <span> </span>  
          <input type="number" min="1" max="10" value={days}
          style={{ height: '40px', fontSize: "40px", fontWeight: "bold" }}
          onChange={(e) => setDays(parseInt(e.target.value))}/> 
          <span> </span> 
          days
        </p>
        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
        <button onClick={saveRent}>Apply</button>
      </main>
      <Footer/>
    </>
  );
}

export default RentMovie;

