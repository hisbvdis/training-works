import useHttp from "../hooks/useHttp.hook";

const baseURL = "https://www.omdbapi.com/?";
const apiKey = "apikey=e1f841c2"

const MovieService = () => {
  const { request, isLoading } = useHttp();

  const getMovies = async () => {
    const data = await request(`${baseURL}${apiKey}&s=matrix`);
    return data.Search;
  }

  const getMovieById = async (movieId) => {
    const data = await request(`${baseURL}${apiKey}&i=${movieId}&plog=full`);
    return data;
  }

  return { getMovies, getMovieById, isLoading };
}

export default MovieService;