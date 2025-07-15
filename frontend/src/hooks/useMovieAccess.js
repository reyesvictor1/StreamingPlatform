import { useState } from "react"
import movieAccess from "../data/movieAccess.js"

function useMovieAccess(movieId) {
  const [accessData, setAccessData] = useState(
    movieAccess.find((m) => m.id === parseInt(movieId))
  );

  const rentMovie = (days) => {
    if (accessData) {
      accessData.remainingDays = days;
      setAccessData({ ...accessData });
    }
  };

  const buyMovie = () => {
    if (accessData) {
      accessData.bought = true;
      setAccessData({ ...accessData });
    }
  };

  return {
    accessData,
    rentMovie,
    buyMovie
  };
}

export default useMovieAccess;
