import { useState } from "react";
import { useFetchMovie } from "./hooks/useFetchMovie";
export const MovieApp = () => {
  const [movieData, setMovieData] = useState("");

  const { getMovieData, movie, loading, error } = useFetchMovie();

  const onInputChange = (e) => {
    setMovieData(e.target.value);
  };

  const handleSearchMovie = () => {
    if (movieData && movieData.trim().length > 1) {
      getMovieData(movieData);
    } else {
      <p>{error}</p>;
    }
  };

  return (
    <>
      <h1>Buscador de peliculas</h1>
      <input
        type="text"
        name="movies"
        placeholder="Insert a movie"
        value={movieData}
        onChange={onInputChange}
      />
      <button onClick={handleSearchMovie}>Search</button>

      {movie && (
        <div className="movie_data">
          <img src={movie.poster} />
          <div className="movie_paragraph">
            <p>Titulo: {movie.title}</p>
            <p>Año: {movie.year}</p>
            <p>Estreno: {movie.released}</p>
            <p>Duracion: {movie.runtime}</p>
            <p>Genero: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Origen: {movie.country}</p>
            <hr />
            <p>Sipnosis: {movie.plot}</p>
          </div>
        </div>
      )}
    </>
  );
};
