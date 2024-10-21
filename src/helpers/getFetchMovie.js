export const getFetchMovie = async (title) => {
  const apiKey = "1bb6c0d8";
  const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

  console.log(url);
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("Error al obtener datos de la pelicula");
    }
    const data = await resp.json();

    return {
      title: data.Title,
      year: data.Year,
      released: data.Released,
      runtime: data.Runtime,
      genre: data.Genre,
      director: data.Director,
      plot: data.Plot,
      country: data.Country,
      poster: data.Poster,
    };
  } catch (err) {
    throw new Error("Error al obtener datos de la pelicula");
  }
};
