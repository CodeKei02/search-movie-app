import { useState } from "react";
import { getFetchMovie } from "../helpers/getFetchMovie";

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovieData = async(title) => {
    try{
        const data = await getFetchMovie(title);
        setMovie(data);
        setLoading(false);
        setError(null);
    }catch(err){
        setError('Error al obtener datos de la pelicula, intentelo de nuevo');
    }

  }
  return {
    getMovieData,
    movie,
    loading,
    error
  }
}


