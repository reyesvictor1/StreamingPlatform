import { Routes, Route } from 'react-router-dom'
import Home from "./Home.jsx"
import ShowMovie from "./ShowMovie.jsx"
import RentMovie from "./RentMovie.jsx"
import BuyMovie from "./BuyMovie.jsx"
import Wishlist from "./Wishlist.jsx"
import MyMovies from "./MyMovies.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies/wishlist" element={<Wishlist/>}/>
      <Route path="/movies/my-movies" element={<MyMovies/>}/>
      <Route path="/movies/details/:id" element={<ShowMovie/>}/>
      <Route path="/movies/rent/:id" element={<RentMovie/>}/>
      <Route path="/movies/buy/:id" element={<BuyMovie/>}/>
    </Routes>
  );
}

export default App;